export default function Time() {
    const now = new Date();
    return (
        <div>
          <span> time { now.toLocaleTimeString()} </span>
          {/* <span> time { "hello".toUpperCase()} </span> */}
        </div>        
    )
  }