import { Link } from 'react-router-dom'

const Portfolio = () => {

	return (
		<section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>Check Out Some of My Works.</h1>
					<div id="portfolio-wrapper" className="row">
						<div className="flex-container primary">
							<div className="image-container">
								<img alt="Search engine project" src={'images/portfolio/BeSentry.png'} className="item-img-article" />
							</div>
							<div className="content-container">
								<h1>BeSentry</h1>
								<div>
									<img src={'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'} className="item-img" />
									<img src={'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white'} className="item-img" />
									<img src={'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'} className="item-img" />
									<img src={'https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white'} className="item-img" />
									<img src={'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white'} className="item-img" />
									<img src={'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white'} className="item-img" />
									<img src={'https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white'} className="item-img" />
									<img src={'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'} className="item-img" />
								</div>
								<p>A community based website where public can view any data related to road hazard such as pothole, debris, broken traffic light, etc. Public also able to sign up and login to contribute to the community</p>
								<p>It is currently in progress as many features will be added. I am also planning to collaborate with local municipality by sharing the data</p>
								<div className="button-container">
									<button>READ MORE</button>
									<a href="http://besentry.com"><button>DEMO</button></a>
								</div>
							</div>
						</div>
						<div className="flex-container secondary">
							<div className="content-container">
								<h1>Ivent - Event Management</h1>
								<div>
									<img src={'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'} className="item-img" />
									<img src={'https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white'} className="item-img" />
									<img src={'https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white'} className="item-img" />
									<img src={'https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray'} className="item-img" />
								</div>
								<p>Event management web application. It is currently in progress and only support a specific type of event which is wedding reception. This application will help bride and groom manage their guest, wedding registry and attendance of their wedding reception</p>
								<div className="button-container">
									<button>READ MORE</button>
									<a href="http://ivent.haziqyusof.com"><button>DEMO</button></a>
								</div>
							</div>
							<div className="image-container">
								<img alt="Ivent project" src={'images/portfolio/Ivent.png'} className="item-img-article" />
							</div>
						</div>
						<div className="flex-container primary">
							<div className="image-container">
								<img alt="Selenium project" src={'/images/article/selenium2.jpeg'} className="item-img-article" />
							</div>
							<div className="content-container">
								<h1>Selenium Reservation Bot</h1>
								<div>
									<img src={'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54'} className="item-img" />
									<img src={'https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white'} className="item-img" />
									<img src={'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white'} className="item-img" />
								</div>
								<p>Bot automation to automate reservation process using Selenium</p>
								<Link className="scrolltop" to={"/article/selenium"}><button>READ MORE</button></Link>
							</div>
						</div>
						<div className="flex-container secondary">
							<div className="content-container">
								<h1>Twitter Bot (Scraper)</h1>
								<div>
									<img src={'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54'} className="item-img" />
									<img src={'https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white'} className="item-img" />
								</div>
								<p>Twitter bot to scrape tweet from a specific twitter user account. Bot was powered by scrapy along with scrapy-playwright package and tkinter for the GUI part</p>
								<div className="button-container">
									<Link className="scrolltop" to={"/article/twitter"}><button>READ MORE</button></Link>
								</div>
							</div>
							<div className="image-container">
								<img alt="Ivent project" src={'images/article/twitter.png'} className="item-img-article" />
							</div>
						</div>
						<div className="flex-container primary">
							<div className="image-container">
								<img alt="Search engine project" src={'images/portfolio/MovieSearchEngine.png'} className="item-img-article" />
							</div>
							<div className="content-container">
								<h1>Movie Search Engine</h1>
								<div>
									<img src={'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'} className="item-img" />
									<img src={'https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white'} className="item-img" />
								</div>
								<p>A simple movie search engine, powered by tmdB</p>
								<div className="button-container">
									<button>READ MORE</button>
									<a href="http://movieengine.haziqyusof.com"><button>DEMO</button></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)

}

export default Portfolio