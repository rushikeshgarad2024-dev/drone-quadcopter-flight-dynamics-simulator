const canvas = document.getElementById('droneCanvas');
const ctx = canvas.getContext('2d');
let t = 0;
let state = { thrust: 65, roll: 0 };

function render() {
  t += 0.05;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cx = canvas.width / 2;
  const cy = canvas.height / 2 + Math.sin(t * 2) * 10;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(state.roll * Math.PI / 180);

  // Carbon Fiber Frame Arms
  ctx.strokeStyle = '#0284c7';
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(-160, 0); ctx.lineTo(160, 0);
  ctx.stroke();

  // Central Avionics Hub
  ctx.fillStyle = '#0f172a';
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 3;
  ctx.fillRect(-35, -25, 70, 50);
  ctx.strokeRect(-35, -25, 70, 50);

  // 4 Rotors & Spinning Blades
  [-160, 160].forEach((rx, idx) => {
    // Motor mount
    ctx.fillStyle = '#334155';
    ctx.fillRect(rx - 15, -15, 30, 15);

    // Spinning Blur Rotor
    ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.beginPath();
    ctx.ellipse(rx, -20, 60, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Thrust vector arrow
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(rx, -20);
    ctx.lineTo(rx, -20 - (state.thrust * 0.6));
    ctx.stroke();
  });

  ctx.restore();

  requestAnimationFrame(render);
}

document.getElementById('thrustRange').addEventListener('input', e => { state.thrust = +e.target.value; document.getElementById('thrustVal').textContent = `${e.target.value}%`; });
document.getElementById('rollRange').addEventListener('input', e => { state.roll = +e.target.value; document.getElementById('rollVal').textContent = `${e.target.value}°`; });

render();
