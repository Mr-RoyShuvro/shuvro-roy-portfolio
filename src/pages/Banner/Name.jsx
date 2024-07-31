

const Name = () => {
    return (
      <div style={styles.body}>
        <h1 style={styles.h1}>Hi, I am Shuvro Roy</h1>
      </div>
    );
  };
  
  const styles = {
    body: {
      padding: 0,
      margin: 0,
    //   backgroundColor: '#000',
      display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   minHeight: '100vh',
    },
    h1: {
      color: 'hsl(0, 0%, 28%)',
      fontSize: '30px',
      fontWeight: 'bold',
      fontFamily: 'monospace',
      letterSpacing: '7px',
      cursor: 'pointer',
      textTransform: 'uppercase',
    //   padding: '64px',
      background: 'linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'shine 3s infinite linear',
    },
  };
  
  export default Name;
  
  // Add the keyframes for the animation
  const keyframes = `
    @keyframes shine {
      0% {
        background-position: 0;
      }
      60% {
        background-position: 600px;
      }
      100% {
        background-position: 600px;
      }
    }
  `;
  
  // Inject the keyframes into a style element in the head of the document
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  