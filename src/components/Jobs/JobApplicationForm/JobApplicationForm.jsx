import React, { useState } from 'react';
import './JobApplicationForm.css';

const JobApplicationForm = ({ jobTitle }) => {
    const [bidAmount, setBidAmount] = useState(0);
    const [coverLetter, setCoverLetter] = useState('');
    const [attachments, setAttachments] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Application Submitted:', { bidAmount, coverLetter, attachments });
        alert(`Your proposal for "${jobTitle}" has been submitted!`);
    };

    const upworkFee = 0.20; // 20% provizija (fiktivna, promenila se s godinama)
    const clientReceives = bidAmount * (1 - upworkFee);

    return (
        <div className="application-form-container">
            <h2 className="app-title">Submit a Proposal for: "{jobTitle || 'Project Title'}"</h2>
            
            <form onSubmit={handleSubmit} className="app-form">
                
                {/* 1. SEKCIJA: BID/CENA */}
                <div className="section-bid">
                    <h3>1. Set Your Price</h3>
                    <div className="bid-grid">
                        <div className="bid-row">
                            <label>Your Bid ($)</label>
                            <input 
                                type="number" 
                                value={bidAmount} 
                                onChange={(e) => setBidAmount(parseFloat(e.target.value))}
                                min="0" 
                                required 
                            />
                        </div>
                        <div className="bid-row fee-info">
                            <label>Upwork Service Fee (20%)</label>
                            <span className="fee-amount">-${(bidAmount * upworkFee).toFixed(2)}</span>
                        </div>
                        <div className="bid-row final-row">
                            <label>You Will Receive</label>
                            <span className="receive-amount">${clientReceives.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* 2. SEKCIJA: COVER LETTER */}
                <div className="section-cover-letter">
                    <h3>2. Cover Letter</h3>
                    <textarea 
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        placeholder="Introduce yourself and explain why you are the best fit for this job..."
                        rows="8"
                        required
                    />
                </div>

                {/* 3. SEKCIJA: ATTACHMENTS */}
                <div className="section-attachments">
                    <h3>3. Attachments (Optional)</h3>
                    <input 
                        type="file" 
                        multiple 
                        onChange={(e) => setAttachments(e.target.files)} 
                    />
                    <p className="attachment-note">Max 5 files, PDFs or portfolios preferred.</p>
                </div>
                
                <button type="submit" className="submit-proposal-btn">Submit Proposal</button>
            </form>
        </div>
    );
};

export default JobApplicationForm;