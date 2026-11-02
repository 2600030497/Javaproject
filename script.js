/* Keyframe Animations */
@keyframes pulseGlow {
0%, 100% {
opacity: 0.25;
transform: scale(1);
}
50% {
opacity: 0.45;
transform: scale(1.08);
}
}

.ambient-glow {
animation: pulseGlow 8s ease-in-out infinite;
}

/* Custom Scrollbars */
.custom-scroll::-webkit-scrollbar {
width: 6px;
height: 6px;
}

.custom-scroll::-webkit-scrollbar-track {
background: #090d16;
}

.custom-scroll::-webkit-scrollbar-thumb {
background: #334155;
border-radius: 4px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
background: #6366f1;
}

/* Print Overrides */
@media print {
header, footer, nav, button, #quiz-running, #quiz-idle {
display: none !important;
}
body {
background-color: white !important;
color: black !important;
}
.tab-content {
display: block !important;
}
}
