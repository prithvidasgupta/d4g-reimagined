<script>
    import logo from '$lib/assets/logo.png'
</script>
<style>
    * {
  box-sizing: border-box;
}

.logo {
    width: 50px;
    height: auto;
}

.nav {
  height: 50px;
  width: 100%;
  position: relative;
  margin-left: 100px;
  margin-right:100px;
  margin-top:20px;
}

.nav > .nav-header {
  display: contents;
  width: 100%;
  height: 100%;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  font-family: Roboto;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
  padding-right:200px ;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: black;
  font-family: Roboto;
}

.nav > .nav-links > a:hover {
  background-color: #54246c;
  color: #fff;
}


@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover{
    background-color: #54246c;
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: black;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    left: 0px;
    right:50px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
}
</style>
<div class="nav">
    <div class="nav-header">
      <div class="nav-title">
        <a href ='/'><img class='logo' alt = 'Data4Good logo'src={logo}/></a>
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <nav class="nav-links">
        <a href="/projects/research">Projects</a>
        <a href="/about">About</a>
        <a href="/faq">FAQ</a>
    </nav>
  </div>