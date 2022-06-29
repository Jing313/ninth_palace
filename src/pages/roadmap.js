import React, { Component }  from 'react';
import Navbar from "../components/navbar";
import Header from "../components/header";
import ToTop from "../components/totop";
import Footer from "../components/footer";
import NormalContent from '../components/sections/roadmap/normalcontent';

function Roadmap() {
  return (
    <div>
      <div class="neoh_fn_main" data-footer-sticky="">
        {/* <!-- Right Navigation --> */}
        <Navbar />
        {/* <!-- !Right Navigation --> */}

        {/* <!-- Header --> */}
        <Header />
        {/* <!-- !Header --> */}

        {/* <!-- Content --> */}
        <div class="neoh_fn_content">
          
          {/* <SingleContent /> */}
          <NormalContent />
        </div>
        {/* <!-- Content --> */}

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- !Footer --> */}
        
        {/* <!-- Totop --> */}
        <ToTop />
        {/* <!-- !Totop --> */}
      </div>
    </div>
  );
}

export default Roadmap;