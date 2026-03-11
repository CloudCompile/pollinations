import { useCallback, useEffect, useRef, useState } from "react";
import "./CodeCanvas.css";

const CodeCanvas = ({ code = "", isGenerating = false, onClose }) => {
    const [editorCode, setEditorCode] = useState(code);
    const [previewCode, setPreviewCode] = useState(code);
    const [activeTab, setActiveTab] = useState("preview");
    const iframeRef = useRef(null);
    const editorRef = useRef(null);

    // Update editor when new code arrives (streaming or initial)
    useEffect(() => {
        setEditorCode(code);
        setPreviewCode(code);
    }, [code]);

    const runPreview = useCallback(() => {
        setPreviewCode(editorCode);
    }, [editorCode]);

    const copyCode = useCallback(() => {
        navigator.clipboard.writeText(editorCode).then(() => {
            if (window?.showToast) window.showToast("Code copied to clipboard!", "info");
        });
    }, [editorCode]);

    const handleEditorKeyDown = (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
            const textarea = editorRef.current;
            if (!textarea) return;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const newValue =
                editorCode.substring(0, start) + "  " + editorCode.substring(end);
            setEditorCode(newValue);
            requestAnimationFrame(() => {
                textarea.selectionStart = start + 2;
                textarea.selectionEnd = start + 2;
            });
        }
    };

    return (
        <div className="code-canvas-overlay">
            <div className="code-canvas-panel">
                <div className="code-canvas-header">
                    <div className="code-canvas-tabs">
                        <button
                            className={`code-canvas-tab ${activeTab === "preview" ? "active" : ""}`}
                            onClick={() => setActiveTab("preview")}
                        >
                            Preview
                        </button>
                        <button
                            className={`code-canvas-tab ${activeTab === "editor" ? "active" : ""}`}
                            onClick={() => setActiveTab("editor")}
                        >
                            Code
                        </button>
                        <button
                            className={`code-canvas-tab ${activeTab === "split" ? "active" : ""}`}
                            onClick={() => setActiveTab("split")}
                        >
                            Split
                        </button>
                    </div>
                    <div className="code-canvas-actions">
                        {activeTab !== "preview" && (
                            <button
                                className="code-canvas-btn"
                                onClick={runPreview}
                                title="Run / refresh preview"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polygon points="5,3 19,12 5,21" />
                                </svg>
                                Run
                            </button>
                        )}
                        <button
                            className="code-canvas-btn"
                            onClick={copyCode}
                            title="Copy code"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" />
                                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                            </svg>
                            Copy
                        </button>
                        <button
                            className="code-canvas-btn code-canvas-close"
                            onClick={onClose}
                            title="Close canvas"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`code-canvas-body ${activeTab}`}>
                    {(activeTab === "editor" || activeTab === "split") && (
                        <div className="code-canvas-editor-pane">
                            {isGenerating && !editorCode && (
                                <div className="code-canvas-generating">
                                    <div className="generating-dots">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <p>Generating code…</p>
                                </div>
                            )}
                            <textarea
                                ref={editorRef}
                                className="code-canvas-editor"
                                value={editorCode}
                                onChange={(e) => setEditorCode(e.target.value)}
                                onKeyDown={handleEditorKeyDown}
                                spellCheck={false}
                                placeholder="// Your code will appear here…"
                            />
                        </div>
                    )}

                    {(activeTab === "preview" || activeTab === "split") && (
                        <div className="code-canvas-preview-pane">
                            {isGenerating && !previewCode ? (
                                <div className="code-canvas-generating">
                                    <div className="generating-dots">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <p>Generating preview…</p>
                                </div>
                            ) : (
                                <iframe
                                    ref={iframeRef}
                                    className="code-canvas-iframe"
                                    title="Code Preview"
                                    sandbox="allow-scripts allow-forms allow-modals allow-popups"
                                    srcDoc={previewCode || "<html><body style='font-family:sans-serif;color:#888;display:flex;align-items:center;justify-content:center;height:100vh;margin:0'><p>Your preview will appear here</p></body></html>"}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CodeCanvas;
