import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
 return (
    <>
    {/* <!-- Right Navigation --> */}
	<div class="nav_overlay"></div>
	<div class="neoh_fn_nav">
		<div class="trigger is-active">
			<div class="trigger_in">
				<span class="text">Close</span>
				<span class="hamb">
					<span class="hamb_a"></span>
					<span class="hamb_b"></span>
					<span class="hamb_c"></span>
				</span>
			</div>
		</div>
		
		<div class="nav_content">
			<div class="nav_menu">
				<ul>
					<li class="menu-item"><Link to="/">Home</Link></li>
					<li class="menu-item"><Link to="/about">About</Link></li>
					<li class="menu-item"><Link to="/roadmap">RoadMap</Link></li>
					<li class="menu-item"><Link to="/mint">Mint</Link></li>
					<li class="menu-item"><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
			<div class="nav_buttons">
				<a href="https://opensea.io/" class="neoh_fn_button" target="_blank">
					<span class="icon">
						<svg class="fn__svg" xmlns="http://www.w3.org/2000/svg" width="223.000000pt" height="200.000000pt" viewBox="0 0 223.000000 200.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M1058 1985 c-40 -22 -48 -45 -48 -129 0 -42 -3 -76 -8 -76 -4 0 -65 16 -136 35 -71 20 -131 34 -133 31 -2 -2 14 -40 36 -85 142 -282 206 -551 170 -723 -13 -65 -90 -228 -153 -327 -26 -40 -45 -79 -42 -87 4 -11 34 -14 136 -14 l130 0 0 -100 0 -100 -152 0 c-134 0 -157 2 -196 21 -56 27 -93 84 -100 149 l-5 50 -275 0 -275 0 6 -78 c7 -85 37 -181 82 -258 44 -75 150 -174 231 -217 140 -73 135 -72 739 -72 534 0 541 0 587 22 69 31 141 104 212 213 35 52 84 127 110 167 37 56 62 82 116 118 37 25 82 50 99 56 31 11 31 11 31 86 0 66 -2 74 -17 69 -10 -3 -137 -39 -283 -81 l-265 -77 -70 -68 c-92 -91 -116 -100 -260 -100 l-115 0 0 100 0 100 74 0 c85 0 102 10 200 120 75 84 110 135 149 218 28 58 32 77 31 147 -1 97 -23 160 -96 272 -52 81 -266 303 -326 338 l-32 19 0 88 c0 90 -13 142 -43 166 -24 20 -79 24 -109 7z"/> <path d="M586 1558 c-18 -29 -126 -198 -240 -376 -113 -178 -206 -328 -206 -333 0 -5 103 -9 254 -9 l254 0 52 105 c61 121 72 195 50 319 -21 118 -101 346 -121 346 -5 0 -24 -24 -43 -52z"/></g></svg>
					</span>
					<span class="text">OpenSea</span>
				</a>
				<a href="https://looksrare.org/" class="neoh_fn_button" target="_blank">
					<span class="icon">
						<svg class="fn__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 3.08105 24 19.14"><path d="M12.0002 13.946C9.9412 13.946 8.27051 12.277 8.27051 10.2163C8.27051 8.15559 9.9412 6.48657 12.0002 6.48657C14.0593 6.48657 15.73 8.15559 15.73 10.2163C15.73 12.277 14.0593 13.946 12.0002 13.946ZM10.3786 10.2163C10.3786 11.1123 11.105 11.8379 12.0002 11.8379C12.8955 11.8379 13.6219 11.1123 13.6219 10.2163C13.6219 9.32034 12.8955 8.59468 12.0002 8.59468C11.105 8.59468 10.3786 9.32034 10.3786 10.2163Z M0 10.2211L7.13513 3.08105H16.8649L24 10.2211L12 22.2162L0 10.2211ZM17.5135 7.62156C14.4818 4.57658 9.51816 4.5766 6.48649 7.62158L3.89189 10.2162L6.48649 12.8108C9.51816 15.8558 14.4818 15.8558 17.5135 12.8108L20.1081 10.2162L17.5135 7.62156Z" /></svg>
					</span>
					<span class="text">Looksrare</span>
				</a>
				<a href="https://discord.com/" class="neoh_fn_button" target="_blank">
					<span class="icon">
						<svg class="fn__svg" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="392.000000pt" viewBox="0 0 512.000000 392.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,392.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M1690 3885 c-317 -70 -559 -148 -858 -275 -49 -21 -57 -30 -126 -139 -330 -522 -544 -1059 -641 -1610 -50 -287 -59 -412 -58 -766 1 -181 5 -355 10 -385 l8 -54 130 -89 c325 -221 663 -391 1017 -512 73 -25 138 -43 144 -41 25 10 274 407 274 437 0 4 -26 17 -57 29 -79 31 -335 158 -352 175 -17 17 -13 23 41 62 l43 31 100 -43 c528 -225 1131 -298 1690 -204 257 43 491 114 766 232 35 15 36 15 80 -20 24 -19 44 -40 44 -46 0 -14 -209 -124 -320 -168 -44 -18 -84 -36 -89 -40 -20 -18 239 -448 270 -449 7 0 65 18 130 41 369 127 702 294 1029 516 l130 89 7 54 c3 30 9 159 13 285 28 882 -200 1686 -702 2477 l-74 116 -137 57 c-253 105 -583 205 -826 250 l-90 17 -17 -24 c-10 -12 -42 -74 -71 -137 l-53 -113 -50 6 c-27 3 -93 11 -145 18 -124 16 -645 16 -775 0 -55 -6 -122 -14 -150 -18 l-50 -5 -65 133 c-76 155 -63 148 -220 113z m204 -1649 c131 -64 226 -189 262 -343 20 -84 14 -223 -14 -304 -115 -344 -492 -448 -737 -204 -160 160 -199 419 -95 632 57 115 150 199 269 240 55 20 80 23 154 20 76 -4 98 -9 161 -41z m1702 -1 c171 -84 274 -259 274 -465 0 -150 -47 -274 -142 -375 -260 -279 -680 -133 -764 265 -44 209 47 442 216 550 82 53 151 71 253 66 77 -3 98 -8 163 -41z"/></g></svg>
					</span>
					<span class="text">Discord</span>
				</a>
			</div>
		</div>
		
		{/* <!-- Nav Footer --> */}
		<div class="nav_footer">
			<div class="nf_left">
				<p>Copyright: CC0; Design: Frenify; Development: Jin </p>
			</div>
			<div class="nf_right">
				<div class="neoh_fn_social_list">
					<ul>
						<li><a href="https://twitter.com/theninthpalace"><i class="fn-icon-twitter"></i></a></li>
						<li><a href="https://www.instagram.com/theninthpalace/"><i class="fn-icon-instagram"></i></a></li>
						<li><a href="https://theninthpalace.medium.com/">
							<svg class="nav_right_fn__svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50"><title>Medium</title><path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"/></svg>
						</a></li>
						<li><a href="https://substack.com/profile/96126173-the-one?utm_source=user-menu">
							<svg class="nav_right_fn__svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Substack</title><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
						</a></li>
						<li><a href="https://www.tiktok.com/@theninthpalace">
							<svg class="nav_right_fn__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2859 3333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><title>TikTok</title><path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"/></svg>
						</a></li>
						<li><a href="https://app.gitbook.com/o/theninthpalace">
							<svg class="nav_right_fn__svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitBook</title><path d="M10.802 17.77a.703.703 0 11-.002 1.406.703.703 0 01.002-1.406m11.024-4.347a.703.703 0 11.001-1.406.703.703 0 01-.001 1.406m0-2.876a2.176 2.176 0 00-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 00-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 002.15 1.862 2.177 2.177 0 002.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0024 12.72a2.176 2.176 0 00-2.174-2.174"/></svg>  
						</a></li>
					</ul>
				</div>
			</div>
		</div>
		{/* <!-- !Nav Footer --> */}
		
	</div>
	{/* <!-- !Right Navigation --> */}
    </>
    
  );
}

export default Navbar;