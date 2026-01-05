import React, { useState } from 'react';
import {
  Download,
  Users,
  Clock,
  Target,
  Heart,
  MousePointer2,
  Layout,
  Share2
} from 'lucide-react';
import Navbar from './Navbar';

export default function BoardGameRules() {
  const [activeTab, setActiveTab] = useState('purpose');

  const handleDownload = () => {
    alert('Η λήψη ξεκίνησε! Σε πραγματική εφαρμογή, θα κατεβάσει τον Οδηγό Ψηφιακής Χρήσης.');
  };

  return (
    <div className="app">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="home">
          <div className="hero">
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              borderRadius: '50%',
              padding: '24px',
              marginBottom: '24px',
              boxShadow: 'var(--shadow-accent)'
            }}>
              <Heart style={{ color: 'white' }} size={48} />
            </div>
            <h1>Δρόμος Ευεξίας</h1>
            <p className="lead">
              Μια Διαδραστική Εμπειρία από την Εξουθένωση στην Ανθεκτικότητα
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginBottom: '32px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--glass-bg)',
                padding: '12px 16px',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-sm)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)'
              }}>
                <Users style={{ color: 'var(--accent)' }} size={20} />
                <span style={{ color: 'var(--text)', fontWeight: '500' }}>2-6</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--glass-bg)',
                padding: '12px 16px',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-sm)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)'
              }}>
                <Clock style={{ color: 'var(--accent)' }} size={20} />
                <span style={{ color: 'var(--text)', fontWeight: '500' }}>20-30 Λεπτά</span>
              </div>
            </div>
            <div className="hero-actions">
              <button className="btn primary" onClick={handleDownload} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Download size={20} />
                Εγκατάσταση
              </button>
            </div>
          </div>
        </section>

        {/* Digital Context Section */}
        <section style={{
          background: 'var(--glass-bg)',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid var(--glass-border)',
          boxShadow: 'var(--shadow-sm)',
          backdropFilter: 'blur(20px)',
          marginBottom: '20px'
        }}>
          <h2>Εισαγωγή</h2>
          <div style={{ marginTop: '16px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            <p>
              Η ενότητα Επιτραπέζιο έχει ως στόχο να προσφέρει έναν εναλλακτικό, βιωματικό τρόπο προσέγγισης του ζητήματος της επαγγελματικής εξουθένωσης, μέσα από τη συμμετοχή σε ένα συγκεκριμένο παιχνίδι. Το επιτραπέζιο παιχνίδι λειτουργεί ως εργαλείο μάθησης και αναστοχασμού, επιτρέποντας στους συμμετέχοντες να έρθουν σε επαφή με έννοιες όπως το άγχος, τα όρια, η αυτοφροντίδα και η υποστήριξη, σε ένα πλαίσιο πιο άμεσο και λιγότερο φορτισμένο. Μέσα από τους κανόνες, τις ερωτήσεις και τις επιλογές του παιχνιδιού, δημιουργείται χώρος για συζήτηση, ανταλλαγή εμπειριών και κατανόηση κοινών προκλήσεων που συχνά παραμένουν ανομολόγητες στην καθημερινή εργασιακή ρουτίνα. Το παιχνίδι ενισχύει τη συνεργασία και την ενεργή συμμετοχή, ενώ παράλληλα διευκολύνει τη σύνδεση της θεωρητικής γνώσης με την προσωπική και επαγγελματική εμπειρία. Η συγκεκριμένη ενότητα φιλοδοξεί να συμβάλει όχι μόνο στην κατανόηση του burnout, αλλά και στη δημιουργία ενός ασφαλούς χώρου διαλόγου, όπου η μάθηση συνδυάζεται με την εμπλοκή, την αλληλεπίδραση και τη συλλογική ενδυνάμωση.
            </p>
          </div>
        </section>
                <section style={{
          background: 'var(--glass-bg)',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid var(--glass-border)',
          boxShadow: 'var(--shadow-sm)',
          backdropFilter: 'blur(20px)',
          marginBottom: '20px'
        }}>
          <h2>Σύντομη Περιγραφή του Παιχνιδιού</h2>
          <div style={{ marginTop: '16px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
            <p>
              Το «Δρόμος Ευεξίας» είναι ένα επιτραπέζιο παιχνίδι διαδρομής. Οι παίκτες ξεκινούν από την αρχή της επαγγελματικής τους πορείας και προχωρούν προς τον στόχο της ευεξίας και της επαγγελματικής ανθεκτικότητας. Κατά τη διάρκεια της διαδρομής, συναντούν ερωτήσεις γνώσης, κάρτες αυτοφροντίδας και κάρτες burnout που επηρεάζουν την πορεία τους στο παιχνίδι.
              Το παιχνίδι δεν έχει ανταγωνιστικό χαρακτήρα. Ο βασικός του στόχος είναι η μάθηση, η ανταλλαγή εμπειριών και η κατανόηση του burnout ως συλλογικού και οργανωτικού φαινομένου και όχι ως προσωπικής αποτυχίας.
            </p>
          </div>
        </section>

        {/* Rules Tabs - Paraphrased for Digital */}
        <section style={{
          background: 'var(--glass-bg)',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid var(--glass-border)',
          boxShadow: 'var(--shadow-sm)',
          backdropFilter: 'blur(20px)',
          marginBottom: '20px'
        }}>
          <h2>Οδηγίες</h2>

          <div style={{
            display: 'flex',
            gap: '8px',
            marginTop: '24px',
            marginBottom: '24px',
            borderBottom: '1px solid var(--border)',
            overflowX: 'auto',
            background: 'var(--glass-bg)',
            padding: '16px',
            borderRadius: '12px 12px 0 0'
          }}>
            {['purpose', 'interface', 'setup', 'gameplay', 'ending'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '12px 20px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeTab === tab ? 'linear-gradient(135deg, var(--accent), var(--accent-2))' : 'transparent',
                  color: activeTab === tab ? 'white' : 'var(--text)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  fontSize: '0.95rem'
                }}
              >
                {tab === 'purpose'
                  ? 'Υλικά'
                  : tab === 'interface'
                  ? 'Κάρτες'
                  : tab === 'setup'
                  ? 'Τρόπος Παινχιδιού'
                  : tab === 'gameplay'
                  ? 'Ροή'
                  : 'Ολοκλήρωση'}
              </button>
            ))}
          </div>

          <div style={{ color: 'var(--text-muted)', minHeight: '400px' }}>
            {activeTab === 'purpose' && (
              <div>
                <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '1.5rem' }}>
                  Ψηφιακά Υλικά
                </h3>
                <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                  Τα ψηφιακα υλικα που αποτελουν το επιτραπεζιο παιχνιδι:
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '16px',
                  marginTop: '24px'
                }}>
                  <div style={{
                    background: 'var(--glass-bg)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-sm)',
                    backdropFilter: 'blur(20px)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                      }}></div>
                      <span style={{ fontWeight: '600', color: 'var(--accent)' }}>Ταμπλό με διαδρομή 25 τετραγώνων</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Πλήρως διαδραστικό ψηφιακό ταμπλό που εμφανίζει την πρόοδο των παικτών.
                    </p>
                  </div>
                  <div style={{
                    background: 'var(--glass-bg)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-sm)',
                    backdropFilter: 'blur(20px)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                      }}></div>
                      <span style={{ fontWeight: '600', color: 'var(--accent)' }}>Πιόνια</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Αυτόματη δημιρουγία και μετακίνηση πιονιών για κάθε παίκτη.
                    </p>
                  </div>
                  <div style={{
                    background: 'var(--glass-bg)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-sm)',
                    backdropFilter: 'blur(20px)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                      }}></div>
                      <span style={{ fontWeight: '600', color: 'var(--accent)' }}>Ζάρι</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Πόνος μη μας έρθει μακάρι , αυτόματα κυλιέται το ζάρι
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'interface' && (
              <div>
                <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '1.5rem' }}>
                  Ψηφιακά Εργαλεία
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '16px'
                }}>
                  <div style={{
                    background: 'var(--glass-bg)',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-sm)',
                    backdropFilter: 'blur(20px)'
                  }}>
                    <h4 style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '8px' }}>
                      Κάρτες Ερωτήσεων
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      Οποίος/α έδωσε προσοχή και σημασία στο θεωρητικό μέρος, θα τα πάει περίφημα εδώ!
                    </p>
                  </div>
                  <div style={{
                    background: 'var(--glass-bg)',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-sm)',
                    backdropFilter: 'blur(20px)'
                  }}>
                    <h4 style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '8px' }}>
                      Κάρτες Αυτοφροντίδας
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      Οποίος/α δεν έδωσε προσοχή και σημασία στο θεωρητικό μέρος, θα τις χρειαστεί!
                    </p>
                  </div>
                  <div style={{
                    background: 'var(--glass-bg)',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-sm)',
                    backdropFilter: 'blur(20px)'
                  }}>
                    <h4 style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '8px' }}>
                      Κάρτες Burnout
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      Είτε διάβασες είτε οχι , αυτές οι κάρτες θα σε φέρουν πιο κοντά στην εμπειρία του burnout.
                    </p>
                  </div>
                </div>  
              </div>
            )}

            {activeTab === 'setup' && (
              <div>
                <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '1.5rem' }}>
                  Πώς να Παίξετε
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                      color: 'white',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>
                      1
                    </div>
                    <p style={{ lineHeight: '1.5' }}>
                      Κάθε παίκτης ρίχνει το ζάρι και προχωρά αντίστοιχα τετράγωνα.
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                      color: 'white',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>
                      2
                    </div>
                    <p style={{ lineHeight: '1.5' }}>
                      Ανάλογα με το τετράγωνο στο οποίο σταματά, ακολουθείται η αντίστοιχη οδηγία:
                      <ul>
                        <li>❓ Ερώτηση: τραβά μία κάρτα ερώτησης και απαντά.</li>
                        <li>💡 Αυτοφροντίδα: διαβάζει την κάρτα και εφαρμόζει την οδηγία.</li>
                        <li>🔥 Burnout: διαβάζει την κάρτα και εφαρμόζει τη συνέπεια.</li>
                      </ul>
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                      color: 'white',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>
                      3
                    </div>
                    <p style={{ lineHeight: '1.5' }}>
                      Δεν υπάρχει «αποκλεισμός» από το παιχνίδι.
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                      color: 'white',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>
                      4
                    </div>
                    <p style={{ lineHeight: '1.5' }}>
                      Νικητής θεωρείται όποιος φτάσει πρώτος στο τέλος, ωστόσο προτείνεται σύντομη συζήτηση στο τέλος για όλους.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'gameplay' && (
              <div>
                <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '1.5rem' }}>
                  Ροή Παιχνιδιού
                </h3>
                <div style={{
                  background: 'var(--glass-bg)',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--shadow-sm)',
                  backdropFilter: 'blur(20px)'
                }}>
                  <div style={{ display: 'grid', gap: '20px' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'white',
                        borderRadius: '8px',
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        🎲
                      </div>
                      <div>
                        <p style={{ fontWeight: '600', color: 'var(--text)', marginBottom: '4px' }}>
                          Virtual Roll
                        </p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          Κάντε κλικ στο εικονίδιο του ζαριού. Το σύστημα μετακινεί αυτόματα το avatar σας.
                        </p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'white',
                        borderRadius: '8px',
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        🖱️
                      </div>
                      <div>
                        <p style={{ fontWeight: '600', color: 'var(--text)', marginBottom: '4px' }}>
                          Action Trigger
                        </p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          Με την άφιξη σε μια θέση, αναδύεται (pop-up) η αντίστοιχη κάρτα ή ερώτηση.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ending' && (
              <div>
                <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '1.5rem' }}>
                  Ολοκλήρωση Παιχνιδιού
                </h3>
                <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                  Το παιχνίδι ολοκληρώνεται όταν ο πρώτος παίκτης φτάσει στο τέρμα. Στη συνέχεια, προτείνεται μια σύντομη συζήτηση μεταξύ όλων των συμμετεχόντων για τις εμπειρίες και τα μαθήματα που αποκόμισαν από το παιχνίδι.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Assets Download Section */}
        <section style={{
          background: 'var(--glass-bg)',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid var(--glass-border)',
          boxShadow: 'var(--shadow-sm)',
          backdropFilter: 'blur(20px)',
          marginBottom: '20px'
        }}>
          <h2>Ψηφιακό Υλικό & Printables</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '24px'
          }}>
            <button
              onClick={handleDownload}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '24px',
                background: 'var(--glass-bg)',
                borderRadius: '12px',
                border: '2px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                color: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--accent)';
                e.target.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <Layout style={{ color: 'var(--accent)', marginBottom: '12px' }} size={32} />
              <span style={{ fontWeight: '600', color: 'var(--text)' }}>Virtual Assets</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Icon Packs
              </span>
            </button>
            <button
              onClick={handleDownload}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '24px',
                background: 'var(--glass-bg)',
                borderRadius: '12px',
                border: '2px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                color: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--accent)';
                e.target.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <Share2 style={{ color: 'var(--accent)', marginBottom: '12px' }} size={32} />
              <span style={{ fontWeight: '600', color: 'var(--text)' }}>Invite Links</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Email Templates
              </span>
            </button>
            <button
              onClick={handleDownload}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '24px',
                background: 'var(--glass-bg)',
                borderRadius: '12px',
                border: '2px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                color: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--accent)';
                e.target.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <Download style={{ color: 'var(--accent)', marginBottom: '12px' }} size={32} />
              <span style={{ fontWeight: '600', color: 'var(--text)' }}>PDF Guide</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Setup Instructions
              </span>
            </button>
            <button
              onClick={handleDownload}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '24px',
                background: 'var(--glass-bg)',
                borderRadius: '12px',
                border: '2px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                color: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--accent)';
                e.target.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <Download style={{ color: 'var(--accent)', marginBottom: '12px' }} size={32} />
              <span style={{ fontWeight: '600', color: 'var(--text)' }}>ZIP Archive</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Complete Game Package
              </span>
            </button>
            <button
              onClick={handleDownload}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '24px',
                background: 'var(--glass-bg)',
                borderRadius: '12px',
                border: '2px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                backdropFilter: 'blur(20px)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                color: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--accent)';
                e.target.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <Heart style={{ color: 'var(--accent)', marginBottom: '12px' }} size={32} />
              <span style={{ fontWeight: '600', color: 'var(--text)' }}>Road to Wellbeing</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Wellness Journey Guide
              </span>
            </button>
          </div>
        </section>
      </main>

      <footer style={{
        background: 'var(--glass-bg)',
        padding: '32px',
        textAlign: 'center',
        marginTop: '40px',
        borderRadius: '20px 20px 0 0',
        border: '1px solid var(--glass-border)',
        borderBottom: 'none',
        boxShadow: 'var(--shadow-lg)',
        backdropFilter: 'blur(30px)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <Heart style={{ color: 'var(--accent)' }} size={28} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
              WorkZEN Care
            </h3>
            <Heart style={{ color: 'var(--accent)' }} size={28} />
          </div>
          <p style={{ fontSize: '1rem', marginBottom: '8px', color: 'var(--text)' }}>
            © 2026 WorkZEN Care - Digital Wellness Platform
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Promoting mental health through interactive experiences
          </p>
        </div>
      </footer>
    </div>
  );
}