:root {
    --bg-color: #0b0d17;
    --primary-pink: #ff6b6b;
    --yellow-star: #feca57;
    --glass-bg: rgba(255, 255, 255, 0.05);
}

body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    font-family: 'Poppins', sans-serif;
    color: white;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Background Stars */
#star-container {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: -1;
    background: radial-gradient(circle at center, #1b2735 0%, #090a0f 100%);
}

.star {
    position: absolute;
    background: white;
    border-radius: 50%;
    opacity: 0.5;
    animation: twinkle var(--duration) infinite ease-in-out;
}

@keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
}

/* Intro Screen */
#intro-screen {
    position: absolute;
    display: none;
    text-align: center;
}
#intro-screen.active { display: block; }

.glow-text {
    font-size: 2.5rem;
    text-shadow: 0 0 20px var(--primary-pink);
    margin-bottom: 2rem;
}

#start-btn {
    background: var(--primary-pink);
    border: none;
    padding: 20px 40px;
    border-radius: 50px;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
    transition: 0.3s;
}

#start-btn span { font-size: 0.9rem; font-weight: 300; }
#start-btn:hover { transform: scale(1.1) rotate(-2deg); }

/* Main Reveal Screen */
#birthday-content {
    display: none;
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0;
    transition: opacity 1.5s ease-in;
}

#birthday-content.active { display: flex; opacity: 1; justify-content: space-around; align-items: center; }

/* The Heart Tree */
.tree-wrapper { position: relative; width: 300px; height: 400px; }
.tree-trunk {
    position: absolute; bottom: 0; left: 50%; width: 10px; height: 150px;
    background: #4a3728; border-radius: 10px; transform: translateX(-50%);
}
#heart-canopy { position: relative; width: 100%; height: 250px; }

.heart-leaf {
    position: absolute; width: 25px; height: 25px;
    background: var(--primary-pink);
    transform: rotate(-45deg);
    animation: pulse 2s infinite;
}
.heart-leaf::before, .heart-leaf::after {
    content: ""; position: absolute; width: 25px; height: 25px;
    background: inherit; border-radius: 50%;
}
.heart-leaf::before { top: -12px; left: 0; }
.heart-leaf::after { left: 12px; top: 0; }

@keyframes pulse {
    0%, 100% { transform: scale(1) rotate(-45deg); }
    50% { transform: scale(1.15) rotate(-45deg); }
}

/* Balloons */
.balloon {
    position: absolute; width: 120px; height: 150px;
    border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
    animation: float 6s infinite ease-in-out;
}
.white-balloon { background: white; right: 10%; top: 20%; }
.patterned-balloon { 
    background: #e0e0e0; right: 15%; top: 40%; 
    background-image: radial-gradient(circle, #333 1px, transparent 1px);
    background-size: 20px 20px;
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(5deg); }
    50% { transform: translateY(-30px) rotate(-5deg); }
}

/* Content Box & Counter */
.content-box { text-align: left; max-width: 500px; padding: 2rem; }
.wish-text { font-family: 'Dancing Script', cursive; font-size: 3rem; color: var(--primary-pink); }
.luckier-since { font-weight: 800; letter-spacing: 5px; margin-top: 2rem; color: #aaa; }
.timer-display { display: flex; gap: 20px; margin-top: 10px; font-size: 1.2rem; }
.time-segment span { display: block; font-size: 2.5rem; font-weight: 800; color: white; }
