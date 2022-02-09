import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,600");
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
}
body {
font-family: "Open Sans", sans-serif;
}

.chatbot {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 -6px 99px -17px rgba(0, 0, 0, 0.68);
}
@media screen and (min-width: 640px) {
  .chatbot {
    max-width: 420px;
    right: 80px;
    top: auto;
  }
}

.chatbot__header {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #275CAB;
  height: 54px;
  padding: 0 20px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px 5px 0px 0px;
  transition: background-color 0.2s ease;
  border-bottom: 3px solid #94CAF1
}

.chatbot__header p {
  margin: 0;
}

.chatbot__header:hover {
  background-color: #393285;
}

.chatbot__message-window {
  height: calc(100% - (54px + 60px));
  padding: 40px 20px 20px;
  background-color: #fff;
  overflow-x: none;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;

  }
}

@media screen and (min-width: 640px) {
  .chatbot__message-window {
    height: 380px;
  }
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
`;

export default GlobalStyle;
