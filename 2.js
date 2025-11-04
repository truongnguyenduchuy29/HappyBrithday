// Lấy các elements
const envelope = document.getElementById('envelope');
const flap = document.getElementById('flap');
const letter = document.getElementById('letter');
const letterContent = document.getElementById('letterContent');
const clickText = document.querySelector('.click-text');
let isOpen = false;

// Xử lý sự kiện click vào envelope
envelope.addEventListener('click', function() {
    if (!isOpen) {
        openEnvelope();
        isOpen = true;
        // Dừng animation bay khi mở thư
        envelope.classList.add('opened');
    }
});

// Hàm mở envelope
function openEnvelope() {
    // Ẩn text "Nhấn vào thư"
    clickText.classList.add('hide');
    
    // Mở nắp thư
    flap.classList.add('open');
    
    // Hiện letter sau 0.5s
    setTimeout(() => {
        letter.classList.add('show');
        
        // Hiện từng dòng chúc mừng
        const wishLines = document.querySelectorAll('.wish-line');
        wishLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add('show');
            }, 800 + (index * 400)); // Mỗi dòng cách nhau 400ms
        });
        
        // Hiện chữ ký cuối cùng
        const signature = document.querySelector('.letter-signature');
        setTimeout(() => {
            signature.classList.add('show');
        }, 800 + (wishLines.length * 400) + 500);
        
        // Tạo confetti sau khi tất cả text hiện xong
        setTimeout(() => {
            createConfetti();
        }, 1000);
        
    }, 500);
}

// Hàm tạo confetti
function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['#00FFFF', '#FF69B4', '#FFD700', '#FF6347', '#9370DB', '#32CD32'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
            
            // Random shape
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '0';
                confetti.style.width = '8px';
                confetti.style.height = '12px';
            }
            
            confettiContainer.appendChild(confetti);
            
            // Xóa confetti sau khi rơi xong
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// Tạo confetti liên tục sau khi mở thư
function continuousConfetti() {
    setInterval(() => {
        if (isOpen) {
            const confettiContainer = document.getElementById('confettiContainer');
            const colors = ['#00FFFF', '#FF69B4', '#FFD700', '#FF6347', '#9370DB', '#32CD32'];
            
            for (let i = 0; i < 5; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
                
                if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '0';
                    confetti.style.width = '8px';
                    confetti.style.height = '12px';
                }
                
                confettiContainer.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }
    }, 300);
}

// Bắt đầu confetti liên tục
continuousConfetti();

// Hiệu ứng hover cho envelope
envelope.addEventListener('mouseenter', function() {
    if (!isOpen) {
        this.style.transform = 'scale(1.08) rotate(2deg)';
    }
});

envelope.addEventListener('mouseleave', function() {
    if (!isOpen) {
        this.style.transform = 'scale(1) rotate(0deg)';
    }
});

// Animation cho Hello Kitty nhấp nháy mắt - Enhanced
setInterval(() => {
    const eyes = document.querySelectorAll('.kitty-eye');
    eyes.forEach(eye => {
        // Chớp mắt
        eye.style.height = '2px';
        eye.style.transform = 'scaleY(0.2)';
        setTimeout(() => {
            eye.style.height = '11px';
            eye.style.transform = 'scaleY(1)';
        }, 150);
    });
}, 3500);

// Random wink cho một con Hello Kitty
setInterval(() => {
    const kitties = document.querySelectorAll('.hello-kitty');
    const randomKitty = kitties[Math.floor(Math.random() * kitties.length)];
    const eyes = randomKitty.querySelectorAll('.kitty-eye');
    const randomEye = eyes[Math.floor(Math.random() * eyes.length)];
    
    // Nháy mắt một bên
    randomEye.style.height = '3px';
    randomEye.style.transform = 'scaleY(0.3)';
    setTimeout(() => {
        randomEye.style.height = '11px';
        randomEye.style.transform = 'scaleY(1)';
    }, 200);
}, 7000);

// Thêm hiệu ứng âm thanh (optional - cần file audio)
function playSound() {
    // Bạn có thể thêm file audio vào nếu muốn
    // const audio = new Audio('birthday-sound.mp3');
    // audio.play();
}

// Tạo bong bóng bay liên tục
setInterval(() => {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.style.bottom = '-100px';
        setTimeout(() => {
            balloon.style.animation = 'none';
            setTimeout(() => {
                balloon.style.animation = 'floatBalloon 6s ease-in-out infinite';
            }, 10);
        }, 100);
    });
}, 8000);

console.log('🎉 Happy Birthday Website Loaded! 🎂');