import React from "react";

function AboutHero() {
    return (
    <>
    {/* <!-- Page Title --> */}
    <div class="neoh_fn_pagetitle">
          <div class="bg_overlay">
            <div class="bg_color"></div>
            <div class="bg_image" data-bg-img="img/about/bg.jpg"></div>
          </div>
          <div class="pt_content">
            <div class="container">
              <h3
                class="fn_title fn_animated_text"
                data-wait="1000"
                data-speed="8"
              >
                About
              </h3>
              <p class="fn_desc">
                <a href="/">Home</a>
                <span class="separator">/</span>
                <span class="current">About</span>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- !Page Title --> */}
    </>
    
  );
}

export default AboutHero;