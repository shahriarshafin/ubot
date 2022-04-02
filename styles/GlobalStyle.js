import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
}
body {
font-family: "Open Sans", sans-serif;
background-color: #F0F0F0;
}



.chatbot__messages {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: auto;
}
.chatbot__messages li {
  margin-bottom: 20px;
}
.chatbot__messages li.is-ai {
  display: inline-flex;
  align-items: flex-start;
}
.chatbot__messages li.is-user {
  text-align: right;
  display: inline-flex;
  align-self: flex-end;
}
.chatbot__messages li .is-ai__profile-picture {
  margin-right: 8px;
}
.chatbot__messages li .is-ai__profile-picture img {
  -webkit-user-drag: none;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.chatbot__message {
  display: inline-block;
  padding: 12px 20px;
  word-break: break-word;
  margin: 0;
  border-radius: 6px;
  letter-spacing: -0.01em;
  line-height: 1.45;
  overflow: hidden;
}
.is-ai .chatbot__message {
  background-color: #f0f0f0;
  margin-right: 30px;
}
.is-user .chatbot__message {
  color: #fff;
  background-color: #275CAB;
  margin-left: 30px;
}
.chatbot__message a {
  color: #7226e0;
  word-break: break-all;
  display: inline-block;
}
.chatbot__message p:first-child {
  margin-top: 0;
}
.chatbot__message p:last-child {
  margin-bottom: 0;
}

.animation:last-child {
  -webkit-animation: fadein 0.25s;
          animation: fadein 0.25s;
  -webkit-animation-timing-function: all 200ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
          animation-timing-function: all 200ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.chatbot__arrow {
  width: 0;
  height: 0;
  margin-top: 18px;
}

.chatbot__arrow--right {
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid #275CAB;
}

.chatbot__arrow--left {
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #f0f0f0;
}

.chatbot__entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  border-top: 1px solid #e6eaee;
  background-color: #fff;
}

.chatbot__input {
  height: 100%;
  width: 80%;
  border: 0;
}
.chatbot__input:focus {
  outline: none;
}
.chatbot__input::-webkit-input-placeholder {
  color: #7f7f7f;
}


.loader {
  margin-bottom: -2px;
  text-align: center;
  opacity: 0.3;
}

.loader__dot {
  display: inline-block;
  vertical-align: middle;
  width: 6px;
  height: 6px;
  margin: 0 1px;
  background: black;
  border-radius: 50px;
  -webkit-animation: loader 0.45s infinite alternate;
          animation: loader 0.45s infinite alternate;
}
.loader__dot:nth-of-type(2) {
  -webkit-animation-delay: 0.15s;
          animation-delay: 0.15s;
}
.loader__dot:nth-of-type(3) {
  -webkit-animation-delay: 0.35s;
          animation-delay: 0.35s;
}

@-webkit-keyframes loader {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}

@keyframes loader {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}
@-webkit-keyframes fadein {
  from {
    opacity: 0;
    margin-top: 10px;
    margin-bottom: 0;
  }
  to {
    opacity: 1;
    margin-top: 0;
    margin-bottom: 10px;
  }
}
@keyframes fadein {
  from {
    opacity: 0;
    margin-top: 10px;
    margin-bottom: 0;
  }
  to {
    opacity: 1;
    margin-top: 0;
    margin-bottom: 10px;
  }
}




/* navbar */
.toggle-btn {
	padding: 0.25rem 0.75rem;
	font-size: 1.25rem;
	line-height: 1;
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	border-color: rgba(0, 0, 0, 0.1);
}

@media (min-width: 992px) {
	.toggle-btn {
		display: none;
	}
}
.toggle-btn:focus {
	box-shadow: 0 0 0 0rem;
	border-color: #5068e2;
}
.toggle-btn svg {
	color: #5068e2;
	font-weight: 300;
	font-size: 28px;
}

.quiz-btn {
	transition: all 0.2s ease;
	letter-spacing: 0.025em;
	font-size: 15px;
	font-weight: 500;
	color: #fff;
	border-color: #d1d9e6;
	/* box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff; */
	user-select: none;
	background-color: #BB1C85;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	border-radius: 0.25rem;
}
.quiz-btn:hover {
	background-color: #d72e9d;
}
/* ......bootstrap overwrite...... */
.navbar-light .navbar-nav .nav-link {
	font-size: 15px !important;
	font-weight: 500 !important;
	color: #fff !important;
	padding-left: 15px !important;
	padding-right: 15px !important;
	user-select: none !important;
}
.navbar-light .navbar-nav .show > .nav-link {
	color: #066ac9 !important;
}
/* .navbar-light .navbar-nav .nav-link:hover {
	color: #066ac9 !important;
} */
.dropdown-item {
	font-size: 15px !important;
	font-weight: 500 !important;
	color: #747579 !important;
}
.dropdown-item:hover,
.dropdown-item:focus {
	border-radius: 0.325rem !important;
	color: #066ac9 !important;
	background-color: #e6f0f9 !important;
}
.dropdown-menu {
	padding-left: 10px !important;
	padding-right: 10px !important;
	box-shadow: 0px 0px 40px rgb(29 58 83 / 15%) !important;
	transition: all 0.3s ease-in-out !important;
}

.dropdown-toggle::after {
	display: none !important;
}
.offcanvas-start {
	width: 270px !important;
}
.carousel-indicators [data-bs-target] {
	background-color: #fff !important;
}
.navbar-light .navbar-nav .show > .nav-link {
    color: #BBDAF3 !important;
}
`;

export default GlobalStyle;
