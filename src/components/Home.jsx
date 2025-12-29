import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from './Navbar'

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    try {
      // Send email to owner
      await emailjs.send(
        'service_g0r7178', // Replace with your EmailJS service ID
        'template_x7kyt4w', // Replace with your EmailJS template ID for owner
        formData,
        'csETf05Ny_Zu5IIu2' // Replace with your EmailJS user ID
      )
      // Send confirmation to sender
      await emailjs.send(
        'service_g0r7178', // Replace with your EmailJS service ID
        'template_5vc7kju', // Replace with your EmailJS template ID for sender
        formData,
        'csETf05Ny_Zu5IIu2' // Replace with your EmailJS user ID
      )
      alert('Σας ευχαριστούμε — το μήνυμά σας στάλθηκε επιτυχώς!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      alert('Σφάλμα κατά την αποστολή. Δοκιμάστε ξανά.')
      console.error(error)
    }
    setIsSending(false)
  }

  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="home" className="home">
          <div className="hero">
            <h1>Ενημερώνουμε για την Αντιμετώπιση της Επαγγελματικής Εξουθένωσης</h1>
            <div className="hero-actions">
              <a className="btn primary" href="#services">Ποιοί είμαστε</a>
            </div>
          </div>

          <section className="info-section" aria-label="Σκοπός και ενημέρωση">
            <h2>Σκοπός & Ενημέρωση</h2>
            <p>
              Η παρούσα ιστοσελίδα είναι αφιερωμένη στην κατανόηση, την πρόληψη και την αντιμετώπιση της
              επαγγελματικής εξουθένωσης (burnout), με ιδιαίτερη εστίαση στους επαγγελματίες των κοινωνικών
              υπηρεσιών και της φροντίδας. Δημιουργήθηκε ως ένας χώρος ενημέρωσης, επιμόρφωσης και ενδυνάμωσης,
              όπου η επιστημονική γνώση συναντά τη βιωμένη εμπειρία. Εδώ θα βρείτε επιμορφωτικό υλικό, απαντήσεις
              σε συχνά ερωτήματα, βιωματικές δραστηριότητες και προσωπικές αφηγήσεις που αναδεικνύουν την ανθρώπινη
              διάσταση της εργασιακής κόπωσης.
            </p>
            <p>
              Στόχος του ιστότοπου δεν είναι μόνο να περιγράψει το φαινόμενο του burnout, αλλά να συμβάλει ενεργά
              στην αναγνώρισή του, στην αποστιγματοποίηση και στην καλλιέργεια μιας πιο βιώσιμης σχέσης με την εργασία.
              Η φροντίδα της ψυχικής υγείας δεν αποτελεί ατομική ευθύνη μόνο, αλλά συλλογική ανάγκη. Μέσα από αυτόν τον
              χώρο, φιλοδοξούμε να ανοίξουμε τον διάλογο, να ενισχύσουμε την επίγνωση και να υπενθυμίσουμε ότι όσοι φροντίζουν
              τους άλλους αξίζουν εξίσου φροντίδα, στήριξη και σεβασμό.
            </p>

            <div className="notice">
              <strong>Σημείωση:</strong> Ο ιστότοπος αυτός προσφέρει αποκλειστικά ενημερωτικό και εκπαιδευτικό υλικό.
              Δεν παρέχουμε άμεσα υπηρεσίες συμβουλευτικής ή θεραπείας μέσω της σελίδας. Αν χρειάζεστε άμεση
              βοήθεια, επικοινωνήστε με τις τοπικές υπηρεσίες υγείας ή έναν επαγγελματία ψυχικής υγείας.
            </div>
          </section>

          <section id="contact" className="info-section">
            <h2>Επικοινωνία</h2>
            <p>Στείλτε σχόλια ή και προτάσεις βελτίωσης του ιστότοπου. Τα διαβάζουμε όλα με αγάπη και αφοσίωση.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Όνομα" required />
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Μήνυμα / Σημεία που σας απασχολούν" rows="4" required />
              <button className="btn primary" type="submit" disabled={isSending}>
                {isSending ? 'Αποστολή...' : 'Αποστολή'}
              </button>
            </form>
          </section>
        </section>
      </main>

      <footer>
        <small>© {new Date().getFullYear()} WorkZEN Care</small>
      </footer>
    </div>
  )
}
