import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ─── EmailJS config ───────────────────────────────────────────────────────────
// Sign up at https://www.emailjs.com/ (free), create a service + template,
// then paste your IDs below.
const SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g. 'template_xyz456'
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';  // e.g. 'abcDEFghiJKL'
// ─────────────────────────────────────────────────────────────────────────────

export default function EmailModal({ open, onClose, subject = '' }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  const close = () => {
    setStatus('idle');
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            onClick={close}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-[#161616] border border-[#2C2C2C] rounded-2xl shadow-[0_0_60px_rgba(157,141,241,0.15)] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-[#2C2C2C]">
                <div>
                  <p className="font-mono text-[0.6rem] text-[#9D8DF1] tracking-[0.2em] uppercase mb-1">Get In Touch</p>
                  <h2 className="font-serif text-2xl font-bold text-white">Send Me a Message</h2>
                </div>
                <button
                  onClick={close}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full bg-[#2C2C2C] hover:bg-[#3a3a3a] text-[#888] hover:text-white flex items-center justify-center text-sm transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="px-8 py-6">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-8 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[rgba(157,141,241,0.15)] border border-[#9D8DF1]/30 flex items-center justify-center text-2xl mx-auto mb-4">
                      ✓
                    </div>
                    <p className="font-serif text-xl text-white font-bold mb-2">Message Sent!</p>
                    <p className="text-[#777] text-sm">I'll get back to you as soon as possible.</p>
                    <button
                      onClick={close}
                      className="mt-6 font-mono text-[0.65rem] text-[#9D8DF1] border border-[#9D8DF1]/40 px-5 py-2 rounded-lg hover:bg-[#9D8DF1] hover:text-[#08080E] transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Hidden subject hint */}
                    <input type="hidden" name="subject_hint" value={subject} />

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[0.6rem] text-[#666] tracking-widest uppercase">Name</label>
                        <input
                          name="from_name"
                          required
                          placeholder="Your name"
                          className="bg-[#1f1f1f] border border-[#2C2C2C] rounded-lg px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#9D8DF1]/60 focus:shadow-[0_0_0_3px_rgba(157,141,241,0.1)] transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[0.6rem] text-[#666] tracking-widest uppercase">Email</label>
                        <input
                          name="reply_to"
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="bg-[#1f1f1f] border border-[#2C2C2C] rounded-lg px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#9D8DF1]/60 focus:shadow-[0_0_0_3px_rgba(157,141,241,0.1)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[0.6rem] text-[#666] tracking-widest uppercase">Subject</label>
                      <input
                        name="subject"
                        required
                        defaultValue={subject}
                        placeholder="What's this about?"
                        className="bg-[#1f1f1f] border border-[#2C2C2C] rounded-lg px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#9D8DF1]/60 focus:shadow-[0_0_0_3px_rgba(157,141,241,0.1)] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[0.6rem] text-[#666] tracking-widest uppercase">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        className="bg-[#1f1f1f] border border-[#2C2C2C] rounded-lg px-4 py-3 text-sm text-white placeholder-[#444] focus:outline-none focus:border-[#9D8DF1]/60 focus:shadow-[0_0_0_3px_rgba(157,141,241,0.1)] transition-all resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-400 text-xs font-mono">Something went wrong. Please try again or email me directly.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="mt-1 w-full py-3 rounded-lg bg-[#9D8DF1] text-[#08080E] font-mono text-[0.75rem] tracking-widest uppercase font-semibold hover:bg-[#bbb0f7] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-[#08080E]/30 border-t-[#08080E] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message →'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
