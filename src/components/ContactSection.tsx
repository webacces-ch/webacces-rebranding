"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils"; // Assure-toi d'avoir ta fonction cn

// --- CONFIGURATION DES LIENS (Basé sur tes infos) ---
const CONTACT_INFO = {
  email: "contact@webacces.ch",
  whatsapp: "https://wa.me/41775225845",
};

export default function ContactSection() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'appel API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ firstName: "", lastName: "", email: "", message: "" });

    // Reset du message de succès après 5 secondes
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const inputClasses =
    "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-100 transition-all duration-300";

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white px-4 py-24">
      <div className="w-full max-w-2xl">
        
        {/* --- HEADER --- */}
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-normal text-neutral-900"
          >
            Contact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris. Maecenas vitae.
          </motion.p>
        </div>

        {/* --- FORMULAIRE --- */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="sr-only">Prénom</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
                required
                value={formState.firstName}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">Nom</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name"
                required
                value={formState.lastName}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={formState.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              name="message"
              id="message"
              rows={6}
              placeholder="Placeholder"
              required
              value={formState.message}
              onChange={handleChange}
              className={cn(inputClasses, "resize-none")}
            />
          </div>

          {/* --- BOUTON D'ENVOI --- */}
          <div className="pt-2">
             <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Envoyé !
                </>
              ) : (
                <>
                  Envoyer
                  <Send className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </div>
        </motion.form>

        {/* --- LIENS DIRECTS (Basé sur tes inputs) --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
          >
            email
            <Mail className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-neutral-900" />
          </a>

          <a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-[#DCF8C6] hover:text-[#075E54]"
          >
            Whatsapp
            <MessageCircle className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-[#25D366]" />
          </a>
        </motion.div>

        {/* Message de succès flottant (Toast simulé) */}
        <AnimatePresence>
            {isSuccess && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-800"
                >
                    Merci ! Votre message a bien été envoyé. Nous vous répondrons sur {formState.email || "votre email"}.
                </motion.div>
            )}
        </AnimatePresence>

      </div>
    </section>
  );
}