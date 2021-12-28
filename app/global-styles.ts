import { createGlobalStyle } from 'styles/styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0
}

body {
  overflow-x: hidden;
  background: #000000
}

#bg-div {
  margin: 0;
  margin-top: 100px;
  margin-bottom: 100px
}

#border-btm {
  padding-bottom: 20px;
  margin-bottom: 0px;
  box-shadow: 0px 35px 2px -35px lightgray
}

#test {
  margin-top: 0px;
  margin-bottom: 40px;
  border: 1px solid #FFE082;
  border-radius: 0.25rem;
  width: 120px;
  height: 30px;
  background-color: #FFECB3
}

.active1 {
  color: #00C853 !important;
  font-weight: bold
}

.bar4 {
  width: 35px;
  height: 5px;
  background-color: #ffffff;
  margin: 6px 0
}

.list-group .tabs {
  color: #000000
}

#menu-toggle {
  height: 50px
}

#new-label {
  padding: 2px;
  font-size: 10px;
  font-weight: bold;
  background-color: red;
  color: #ffffff;
  border-radius: 5px;
  margin-left: 5px
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem
}

#sidebar-wrapper .list-group {
  width: 15rem
}

#page-content-wrapper {
  min-width: 100vw;
  padding-left: 20px;
  padding-right: 20px
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0
}

.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #fff !important;
  border-color: #fff !important
}

@media (min-width: 768px) {
  #sidebar-wrapper {
      margin-left: 0
  }

  #page-content-wrapper {
      min-width: 0;
      width: 100%
  }

  #wrapper.toggled #sidebar-wrapper {
      margin-left: -15rem;
      display: none
  }
}

.card0 {
  margin-top: 10px;
  margin-bottom: 10px
}

.top-highlight {
  color: #00C853;
  font-weight: bold;
  font-size: 20px
}

.form-card input,
.form-card textarea,
.form-card select {
  padding: 10px 15px 5px 15px;
  border: none;
  border: 1px solid lightgrey;
  border-radius: 6px;
  margin-bottom: 25px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  font-family: arial;
  color: #2C3E50;
  font-size: 14px;
  letter-spacing: 1px
}

.form-card input:focus,
.form-card textarea:focus,
.form-card select:focus {
  -moz-box-shadow: 0px 0px 0px 1.5px skyblue !important;
  -webkit-box-shadow: 0px 0px 0px 1.5px skyblue !important;
  box-shadow: 0px 0px 0px 1.5px skyblue !important;
  font-weight: bold;
  border: 1px solid skyblue;
  outline-width: 0
}

button.btn-success, input.btn-success {
  height: 50px;
  color: #ffffff;
  opacity: 0.9;
  width: 100%;
}

#below-btn a {
  font-weight: bold;
  color: #000000
}

.input-group {
  position: relative;
  width: 100%;
  overflow: hidden
}

.input-group input, .input-group select {
  position: relative;
  height: 90px;
  margin-left: 1px;
  margin-right: 1px;
  border-radius: 6px !important;
  padding-top: 30px;
  padding-left: 25px
}

.input-group label {
  position: absolute;
  height: 24px;
  background: none;
  border-radius: 6px;
  line-height: 48px;
  font-size: 15px;
  color: gray;
  width: 100%;
  font-weight: 100;
  padding-left: 25px
}

input:focus+label {
  color: #1E88E5
}
.input-group>.form-control:focus, .input-group>.form-select:focus {
  z-index: 0 !important;
}

#qr {
  margin-bottom: 150px;
  margin-top: 50px
}
.text-right {
  float: right;
}
.input-group .text-danger {
  position: absolute;
  top: 12px;
  right:12px;
}
`;

export default GlobalStyle;
