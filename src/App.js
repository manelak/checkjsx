
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Hi I'am Manel</h1>
    </div>
    <br />
    <img src="Manel.jpg" width={320} height={240} />

    <img src="developer.png" width={320} height={240} />
    <br />
  <br />
  <video width={320} height={240} controls>
    <source src="What Is A Full-Stack Web Developer_.mp4" type="video/mp4" />
  </video>
</div>

        
      </div>
    
  );
}

export default App;
