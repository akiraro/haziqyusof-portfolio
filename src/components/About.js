
const About = () => {
	return (
		<section id="about">
			<div className="row">

				<div className="three columns">

					<img className="profile-pic" src="images/profilepic.jpg" alt="" />

				</div>

				<div className="nine columns main-col">

					<h2>About Me</h2>
					<p>
					I am an intermediate Full Stack Software Developer with 3 years of experience. Currently working at a start-up company in Ottawa, Canada. I graduated from the University of Ottawa with BSc in Computer Engineering. I love to spend my free time with sports like Volleyball and Badminton.
					</p>

					<p>
					I am constantly learning new tools and technologies. My next target is to learn VueJS, NextJS and Apache Kafka
					</p>
					<div className="row">

						<div className="columns contact-details">

							<h2>Contact Details</h2>
							<p className="address">
								<span>Haziq Yusof</span>
								<br></br>
								<span>
									haziq_yusof@hotmail.com
								</span>
								<br></br>
								<span>haziqyusof.com</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About