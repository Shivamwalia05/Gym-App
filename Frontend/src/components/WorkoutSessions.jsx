import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
  <div className="wrapper">
    <h1>TOP WORKOUT SESSION</h1>
    <p>
      Push your limits, transform your body, and conquer every challenge. This is where your best self begins.
    </p>
    <img src="/img5.jpg" alt="workout" />
  </div>
  <div className="wrapper">
    <h1>FEATURED BOOTCAMPS</h1>
    <p>
      Unleash your full potential with intense, results-driven bootcamps designed to build strength and endurance.
    </p>
    <div className="bootcamps">
      <div>
        <h4>Strength & Power</h4>
        <p>
          Get stronger, faster, and more resilient. Every rep brings you closer to your goals.
        </p>
      </div>
      <div>
        <h4>Endurance & Stamina</h4>
        <p>
          Build the stamina to keep going when others stop. Train your body to outperform yesterday.
        </p>
      </div>
      <div>
        <h4>Speed & Agility</h4>
        <p>
          Quick, sharp, and powerful. Train to move with purpose and precision in everything you do.
        </p>
      </div>
      <div>
        <h4>Core Strength</h4>
        <p>
          Strength starts from within. Develop a rock-solid core to enhance every aspect of your fitness journey.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default WorkoutSessions