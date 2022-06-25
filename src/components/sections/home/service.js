import React from "react";

function HomeService() {
    return (
    <>
    <section id="services">
			
			{/* <!-- Dividers --> */}
			<img src="svg/divider.svg" alt="" class="fn__svg fn__divider top_divider"/>
			<img src="svg/divider.svg" alt="" class="fn__svg fn__divider bottom_divider"/>
			{/* <!-- !Dividers --> */}
			
			
			<div class="container">
				
				{/* <!-- Main Title --> */}
				<div class="neoh_fn_title">
					<h3 class="fn_title">Why Choose Us?</h3>
					<div class="line"><span></span></div>
				</div>
				{/* <!-- !Main Title --> */}
				
				{/* <!-- Services --> */}
				<div class="neoh_fn_services">
					<ul>
						<li>
							<div class="item">
								<div class="item_num"><span>01</span></div>
								<div class="item_content">
									<h3 class="fn_title">Ecosystem</h3>
									<p class="fn_desc fn_animated_text">
										The avatar mint is simply our opening move. We have two highly competent teams developing a mobile and PC game. We have business plans to create an Incubator for similarly well planned projects. We have a future; bear market or otherwise.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="item">
								<div class="item_num"><span>02</span></div>
								<div class="item_content">
									<h3 class="fn_title">Quality</h3>
									<p class="fn_desc fn_animated_text">
										Everything about this project is thought out. The art is planned, sketched, and illustrated for each use case that arises. The game design is complete: storyline, pre-production, production, testing, etc. We aren’t in any rush to change the future. We believe in quality.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="item">
								<div class="item_num"><span>03</span></div>
								<div class="item_content">
									<h3 class="fn_title">Top Shelf Team</h3>
									<p class="fn_desc fn_animated_text">
										The members of the The Ninth Palace team are the best in the industry. We are spread across the globe, and are all professionals in careers: tech workers, game developers, artists, and a musician. We are a family; we shy away from consultancy for day-to-day work, and it shows.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="item">
								<div class="item_num"><span>04</span></div>
								<div class="item_content">
									<h3 class="fn_title">Future</h3>
									<p class="fn_desc fn_animated_text">
										Our business plan has three time frames: Immediate, Short, and Long Term. We are planning on growing this company for years, and to scale sustainably. Web3 needs businesses, revenue, measurable metrics and actionable intelligence. We are planning for the future.
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
				{/* <!-- !Services --> */}
				
			</div>
		</section>
    </>
    
  );
}

export default HomeService;