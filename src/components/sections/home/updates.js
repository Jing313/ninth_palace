import React from "react";

function UpdateSection() {
    return (
    <>
    <section id="blog">
			<div class="container">
				
				{/* <!-- Main Title --> */}
				<div class="neoh_fn_title">
					<h3 class="fn_title">Updates & News</h3>
					<div class="line"><span></span></div>
				</div>
				{/* <!-- !Main Title --> */}
				
				{/* <!-- Moving Blog List Shortcode --> */}
				<div class="neoh_fn_moving_blog">
					<ul>
						<li>
							<div class="item">
								<img src="img/blog/sketch.jpg" alt="" class="moving_img"/>
								<p class="fn_date">
									<span>November 2021</span>
								</p>
								<p class="fn_desc">
									Pre-Production stops. The Team begins exploring options in Web3, and deciding whether or not it’s beneficial for the game, the community, and gaming in general.
								</p>
								
							</div>
						</li>
						<li>
							<div class="item">
								<img src="img/blog/Tee.jpg" alt="" class="moving_img"/>
								<p class="fn_date">
									<span>March 2022</span>
								</p>
								<p class="fn_desc">
									The storyline, and “world, assets, characters” continues to be built. Pre-Production begins anew; Web3 whitepaper is added to the task list. 
								</p>
							</div>
						</li>
						<li>
							<div class="item">
								<img src="img/blog/rd2.jpg" alt="" class="moving_img"/>
								<p class="fn_date">
									<span>May 2022</span>
								</p>
								
								<p class="fn_desc">
									Asset creation begins, and The Resistance Economy is born. The illustrations for teasers, avatar mint, and marketing begin to get created.
								</p>
							</div>
						</li>
					</ul>
				</div>
				{/* <!-- !Moving Blog List Shortcode --> */}
				
				
			</div>
		</section>
    </>
    
  );
}

export default UpdateSection;