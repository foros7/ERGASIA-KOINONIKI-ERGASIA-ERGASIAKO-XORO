import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import groupImage from '../assets/images/group-image.png'
import spongebobPhoto from '../assets/images/spongebob-photo.png'
import mirrorSelfie from '../assets/images/mirror-selfie.png'
import baristaImage from '../assets/images/barista.png'
import ouraniaImage from '../assets/images/ourania.png'

export default function AboutUs() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="info-section" aria-label="Ποιοί είμαστε">
          <h2>Ποιοί είμαστε</h2>
          <div className="team-photo-container">
            <img 
              src={groupImage} 
              alt="Η ομάδα μας - τέσσερις φοιτήτριες"
              className="team-photo bounce-in"
            />
          </div>
          <p style={{textAlign: 'center', fontSize: '1.1rem'}}>
            <strong>Τέσσερις φοιτήτριες. Ένα site. Άπειρα deadlines.</strong><br />
            <strong>Γιατί το burnout δεν είναι θεωρία είναι εμπειρία.</strong>
          </p>
          
          <p style={{marginTop: '30px'}}>
            Είμαστε τέσσερις φοιτήτριες Κοινωνικής Εργασίας στο ΠΑΔΑ και αυτή η σελίδα υπάρχει για δύο λόγους:
          </p>
          <ol>
            <li>να μιλήσουμε για την <strong>επαγγελματική εξουθένωση</strong></li>
            <li>να πάρουμε <strong>καλό βαθμό</strong> και να μας μείνει <strong>ΕΝΑ. ΜΟΝΟ. ΕΞΑΜΗΝΟ.</strong> για πτυχίο.</li>
          </ol>
          <p>
            Το <strong>WorkZen Care</strong> γεννήθηκε μέσα από deadlines, καφέδες, "θα το κάνω αύριο" και τη στιγμή που 
            καταλάβαμε ότι το burnout δεν αφορά μόνο εργαζόμενους αλλά και φοιτήτριες που ανοίγουν Word 
            στις 02:37 π.μ.
          </p>
          
          <p style={{marginTop: '20px'}}>
            Ως μελλοντικές κοινωνικές λειτουργοί, ξέρουμε ότι δεν μπορείς να φροντίζεις τους άλλους όταν 
            έχεις καεί εσύ.<br />
            Γι' αυτό δημιουργήσαμε έναν χώρο που μιλάει σοβαρά για την εξουθένωση, αλλά χωρίς να παίρνει 
            τον εαυτό του <em>υπερβολικά</em> σοβαρά. Γιατί αν δεν γελάσεις λίγο, απλά... καίγεσαι περισσότερο.
          </p>
          
          <p style={{marginTop: '20px'}}>
            Αν το <strong>WorkZen Care</strong> σας βοηθήσει να αναγνωρίσετε τα σημάδια του burnout ή να πάρετε μια ανάσα 
            πριν πείτε «τα παρατάω όλα», mission accomplished.<br />
            Αν πάρουμε και καλό βαθμό, το λέμε και <em>success story</em>.
          </p>
        </section>

        <section className="info-section fun-photos-section" aria-label="Η ομάδα μας">
          <h2>Η Εμπειρία μας</h2>
                    
          <p style={{fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center', marginTop: '30px'}}>
            Burnout, όπως το ζήσαμε. Όχι όπως το διαβάσαμε.
          </p>
          <div className="fun-photos-container">
            <div className="fun-photo-wrapper float-animation">
              <img 
                src={mirrorSelfie}
                alt="Πελαγία"
                className="fun-photo"
              />
              <div style={{textAlign: 'center', marginTop: '15px'}}>
                <h3 style={{marginBottom: '8px', fontSize: '1.3rem'}}>👟 ΠΕΛΑΓΙΑ</h3>
                <p style={{color: 'var(--text-muted)', lineHeight: '1.6'}}>
                  Δεν φτάνει που ακούει ό,τι μπορείς να φανταστείς μέσα στη βάρδια...<br />
                  έχει και νέα παραλαβή.<br />
                  <strong>Η κούραση δεν μπαίνει ράφι.</strong>
                </p>
              </div>
            </div>

            <div className="fun-photo-wrapper float-animation-delayed">
              <img 
                src={baristaImage} 
                alt="Μαριαλένα"
                className="fun-photo"
              />
              <div style={{textAlign: 'center', marginTop: '15px'}}>
                <h3 style={{marginBottom: '8px', fontSize: '1.3rem'}}>☕ ΜΑΡΙΑΛΕΝΑ</h3>
                <p style={{color: 'var(--text-muted)', lineHeight: '1.6'}}>
                  Ξεκίνησε για μία βάρδια.<br />
                  Κατέληξε να κάνει πέντε πράγματα ταυτόχρονα.<br />
                  <strong>Διάλειμμα: θεωρητική έννοια.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="fun-photos-container">
            <div className="fun-photo-wrapper float-animation">
              <img 
                src={ouraniaImage}
                alt="Ουρανία"
                className="fun-photo"
              />
              <div style={{textAlign: 'center', marginTop: '15px'}}>
                <h3 style={{marginBottom: '8px', fontSize: '1.3rem'}}>🌸 ΟΥΡΑΝΙΑ</h3>
                <p style={{color: 'var(--text-muted)', lineHeight: '1.6'}}>
                 Νέο αρώμα<br />
                  Πολύς Κόσμος<br />
                  <strong>'Οχι όλοι φρέσκοι.</strong>
                </p>
              </div>
            </div>

            <div className="fun-photo-wrapper float-animation-delayed">
              <img 
                src={spongebobPhoto} 
                alt="Πέννυ"
                className="fun-photo"
              />
              <div style={{textAlign: 'center', marginTop: '15px'}}>
                <h3 style={{marginBottom: '8px', fontSize: '1.3rem'}}>🎈 ΠΕΝΝΥ</h3>
                <p style={{color: 'var(--text-muted)', lineHeight: '1.6'}}>
                  Χαμόγελο on. Ενέργεια on.<br />
                  Εσωτερική μπαταρία στο 5%.<br />
                  <strong>Fake it till you... τελειώσει το πάρτι.</strong>
                </p>
              </div>
            </div>
          </div>
          
        </section>
      </main>

      <footer>
        <small>© {new Date().getFullYear()} WorkZEN Care</small>
      </footer>
    </div>
  )
}