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
					<h3 class="fn_title">What Makes Us Different?</h3>
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
									The mint is our opening move. The short-term game is a mobile & PC game. The intermediate game is the sustainable in-game economy. The long-game is the Web3 gaming incubator.
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
									Each and every part of the project has been well thought out. We've been building for over 8-months. The art is all original and drawn directly from the storyline. The game design is an ever-evolving piece of art: the narrative drives it and the gameplay guides it. We've adapted or innovated around technological pain points. We aren’t in any rush to change the future. We believe in quality.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="item">
								<div class="item_num"><span>03</span></div>
								<div class="item_content">
									<h3 class="fn_title">Future</h3>
									<p class="fn_desc fn_animated_text">
									We've built the games with alternative metadata narratives planned for future releases. We've designed layers of hidden puzzles, ciphers to crack, and stories within the overarching story. The economy is directly connected to the narrative and our ultimate goal is to give game developers an incubator, an in-game economic model that will enable better games. Our "ConnectOne" system is going to be made open-source shortly after our release to allow game developers to integrate Web3 value systems while doing away with the mess of wallets, logins, and swaps.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div class="item">
								<div class="item_num"><span>04</span></div>
								<div class="item_content">
									<h3 class="fn_title">Business</h3>
									<p class="fn_desc fn_animated_text">
										We're a business. We started this project tracking expenses, hours, and investments. We've built out an accounting platform that works with Web3. We've applied for registration in Singapore, and are waiting for the approval for a corporate-crypto bank account. We're working with a legal team from the very beginning to ensure the in-game economy is in compliance in all jurisdictions. Our employees sign employment contracts AND receive salaries/bonuses in crypto. We're the future of Web3 gaming.
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