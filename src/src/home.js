import React from 'react';
import './home.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const HomePage = () => {
    const navigate = useNavigate(); // Initialize navigation

    const handleDiscoverClick = () => {
        navigate('/clubs'); // Naviga
    };
    const reviews = [
        { name: 'MADHUMITHA', content: 'Great platform for connecting with students!', rating: 5 },
        { name: 'NAVEEN', content: 'I love the clubs available here. So many options!', rating: 4 },
        { name: 'SHALINI', content: 'The best way to stay engaged in college life.', rating: 5 },
        { name: 'KAVYAA', content: 'A fantastic community and lots of activities!', rating: 4 },
    ];

    return (
        <div>
            {/* Header removed */}

            <motion.section 
                id="home" 
                className="hero"
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 2 }}
            >
                <h1>Welcome to ClubConnect</h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                >
                    Explore and join various clubs and cells in your institution.
                </motion.p>
                <motion.button 
                    className="btn"
                    whileHover={{ scale: 1.1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    onClick={handleDiscoverClick} // Handle navigation on click
                >
                    Discover Clubs
                </motion.button>
            </motion.section>

            <motion.section 
                id="reviews" 
                className="reviews"
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1.5 }}
            >
                <h2>What Our Users Say</h2>
                <div className="review-slider">
                    {reviews.map((review, index) => (
                        <motion.div 
                            className="review-card" 
                            key={index}
                            whileHover={{ y: -10, scale: 1.05 }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: index * 0.3 }}
                        >
                            <h3>{review.name}</h3>
                            <p>{review.content}</p>
                            <div className="rating">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="star">⭐</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <footer>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    &copy; KONGU ENGINEERING COLLEGE
                </motion.p>
            </footer>
        </div>
    );
};

export default HomePage;
