export const Navbar = () => {
    return (
      
<header class="theme-main-menu sticky-menu theme-menu-four">
				<div class="inner-content">
					<div class="d-flex align-items-center">
						<div class="logo order-lg-0"><a href="index-2.html" class="d-block"><img src="images/logo/logo_03.png" alt="" width="90"></img></a></div>

						<div class="right-widget d-flex align-items-center ms-auto order-lg-3">
							<div class="call-button d-none d-xl-block me-5">Call us <a href="#">(+880) 321 782 110</a></div>
							<button class="menu-search-btn tran3s" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i class="bi bi-search"></i></button>
							<a href="contact-us.html" class="send-msg-btn tran3s d-none d-lg-block">Send us Message</a>
						</div> 
						<nav class="navbar navbar-expand-lg order-lg-2">
							<button class="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						    	<span></span>
						 	</button>
						    <div class="collapse navbar-collapse" id="navbarNav">
						    	<ul class="navbar-nav">
						    		<li class="d-block d-lg-none"><div class="logo"><a href="index-2.html"><img src="images/logo/logo_01.png" alt="" width="130"></img></a></div></li>
							        <li class="nav-item active dropdown">
							        	<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Home</a>
							        	<ul class="dropdown-menu">
							                <li><a href="index-2.html" class="dropdown-item"><span>User Analysis</span></a></li>
							                <li><a href="index-3.html" class="dropdown-item"><span>Artificial Intelligence</span></a></li>
							                <li><a href="index-4.html" class="dropdown-item"><span>Data Science</span></a></li>
							                <li><a href="index-5.html" class="dropdown-item"><span>Chatboot</span></a></li>
							                <li><a href="index-6.html" class="dropdown-item"><span>Machine Learning</span></a></li>
						                </ul>
						            </li>
						            <li class="nav-item dropdown">
							        	<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pages</a>
							        	<ul class="dropdown-menu">
							                <li class="dropdown-submenu dropdown">
							                	<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>About Us</span></a>
							                	<ul class="dropdown-menu">
									            	<li><a href="about-us1.html" class="dropdown-item"><span>About Us One</span></a></li>
										            <li><a href="about-us2.html" class="dropdown-item"><span>About Us Two</span></a></li>
									            </ul>
							                </li>
							                <li class="dropdown-submenu dropdown">
							                	<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Services</span></a>
							                	<ul class="dropdown-menu">
									            	<li><a href="service-V1.html" class="dropdown-item"><span>Service One</span></a></li>
										            <li><a href="service-V2.html" class="dropdown-item"><span>Service Two</span></a></li>
										            <li><a href="service-details-V1.html" class="dropdown-item"><span>Service Details</span></a></li>
									            </ul>
							                </li>
							                <li class="dropdown-submenu dropdown">
							                	<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Our Team</span></a>
							                	<ul class="dropdown-menu">
									            	<li><a href="team.html" class="dropdown-item"><span>Team Member</span></a></li>
										            <li><a href="team-details.html" class="dropdown-item"><span>Team Details</span></a></li>
									            </ul>
							                </li>
							                <li class="dropdown-submenu dropdown">
							                	<a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Other Pages</span></a>
							                	<ul class="dropdown-menu">
									            	<li><a href="faq.html" class="dropdown-item"><span>Faq</span></a></li>
									            	<li><a href="signin.html" class="dropdown-item"><span>Signin</span></a></li>
									            	<li><a href="sign-up.html" class="dropdown-item"><span>Signup</span></a></li>
							                		<li><a href="404.html" class="dropdown-item"><span>404 Error</span></a></li>
									            </ul>
							                </li>
							                <li><a href="testimonial.html" class="dropdown-item"><span>Testimonials</span></a></li>
							                <li><a href="pricing.html" class="dropdown-item"><span>Our Pricing</span></a></li>
						                </ul>
						            </li>
						            <li class="nav-item dropdown">
							        	<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Portfolio</a>
							        	<ul class="dropdown-menu">
							                <li><a href="portfolio-V1.html" class="dropdown-item"><span>Portfolio 3 Column</span></a></li>
							                <li><a href="portfolio-V2.html" class="dropdown-item"><span>Portfolio 2 Column</span></a></li>
							                <li><a href="portfolio-V3.html" class="dropdown-item"><span>Portfolio Masonry</span></a></li>
							                <li><a href="portfolio-details-V1.html" class="dropdown-item"><span>Single Portfolio</span></a></li>
						                </ul>
						            </li>
							        <li class="nav-item dropdown">
							        	<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Blog</a>
						                <ul class="dropdown-menu">
							                <li><a href="blog-V1.html" class="dropdown-item"><span>Grid Layout</span></a></li>
							                <li><a href="blog-V2.html" class="dropdown-item"><span>Grid With Sidebar</span></a></li>
							                <li><a href="blog-V3.html" class="dropdown-item"><span>Blog Masonary</span></a></li>
							                <li><a href="blog-V4.html" class="dropdown-item"><span>Blog Standard</span></a></li>
							                <li><a href="blog-details.html" class="dropdown-item"><span>Blog Details</span></a></li>
						                </ul>
						            </li>
						            <li class="nav-item">
							        	<a class="nav-link" href="contact-us.html" role="button">Contact</a>
						            </li>
						    	</ul>
						    	<div class="mobile-content d-block d-lg-none">
						    		<div class="d-flex flex-column align-items-center justify-content-center mt-70">
						    			<a href="contact-us.html" class="send-msg-btn tran3s mb-10">Send us Message</a>
						    			<div class="call-button">Call us <a href="#">(+880) 321 782 110</a></div>
						    		</div>
						    	</div> 
						    </div>
						</nav>
					</div>
				</div> 
			</header>


    );
} 