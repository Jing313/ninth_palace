import React from "react";
import SocialList from "./sociallist";

function Footer() {
    return (
    <>
    <footer id="footer">
		<div class="neoh_fn_footer">
		
			{/* <!-- Footer Top --> */}
			<div class="footer_top">
				<div class="container">
					<div class="ft_in">
					
						<div class="desc">
							<div class="img">
								<img src="img/footer-logo.png" alt=""/>
							</div>
							<h3 class="fn_title">Join Now For Early Access</h3>
							<p class="fn_desc">
								Bringing Web3 tokenomics and AAA-quality gameplay involves marrying the concepts of both worlds with UI at the heart of the design. Joining now builds your profile, and enables automatic connection for basic stuff like updates, minting, or teasers… but also in-game leveling, rewards, and marketplace interaction in the near future. This will help crypto-n00bs earn without getting overwhelmed with the “process” every time. 
								More on this in the <a class="fn_desc" href="https://app.gitbook.com/o/theninthpalace">whitepaper</a>.
							</p>
						</div>
						
						<div class="subscribe_form">
							<div class="subscribe_in">
								<input type="text" placeholder="Email..."/>
								<a href="#" class="neoh_fn_button only_text">
									<span class="text">Enroll</span>
								</a>
								
							</div>
							<input type="checkbox" name="enroll" value="Subscribe" id="enroll"/>
							<label for="love"> Check if you love to enroll!</label>
							<div class="returnmessage" data-success="Your message has been received, We will contact you soon." data-message="You have subscribed to our updates. Thank you" data-invalid-email="Please enter valid email!"></div>
							<div class="empty_notice"><span>Please enter your Email</span>
							</div>
						</div>
						
						<SocialList />
						
					</div>
				</div>
			</div>
			{/* <!-- !Footer Top --> */}
			
			{/* <!-- Footer Bottom --> */}
			<div class="footer_bottom">
				<div class="container">
					<div class="fb_in">
						
						<div class="fb_left">
							<p>Copyright: CC0; Design: Frenify; Development: Jin</p>
						</div>
						
						
					</div>
				</div>
			</div>
			{/* <!-- !Footer Bottom --> */}
			
		</div>
	</footer>
    </>
    
  );
}

export default Footer;