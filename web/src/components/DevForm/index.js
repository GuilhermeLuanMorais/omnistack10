import React, {useState, useEffect} from 'react';

function DevForm({onSubmit}) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setlongitude] = useState('');
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    // usando useEffect para que nao chame a função todas vez que renderizar o componente
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setlongitude(longitude);

        },
        (err) => {
            console.log(err);
        },
        {
            timeout: 30000,
        }
        );
    }, []); // Se array vazio, executa uma unica vez
    
    async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input 
            name="github_username" 
            id="github_username" 
            required 
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
          />
        </div>
      
        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input 
            name="techs" 
            id="techs" 
            required 
            value={techs}
            onChange={e => setTechs(e.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              required 
              value={latitude} 
              onChange={e => setLatitude(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude}
              onChange={e => setlongitude(e.target.value)}
            />
          </div>
        </div>
        
        <button type="submit">Salvar</button>
      </form>
    )
}

export default DevForm;