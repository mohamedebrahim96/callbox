import React, { Component } from 'react';
import './App.css';


class App extends Component {

  
	
	 

    render() {
      return (

        <div className="App">
		<section class="hero is-primary">

		
			<div class="hero-nav">
				<div class="container">
					<nav class="navbar" role="navigation" aria-label="main navigation">
						<div class="navbar-brand">
							<a href="https://www.usecallbox.com/">
								<img class="logo" src={require('./images/logo-white.svg')} alt="CallBox"/>
							</a>

							<div class="navbar-burger">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>

						<div class="navbar-menu">
							<div class="navbar-end">
								<a class="navbar-item" href="https://www.usecallbox.com/Seller">Become a Seller</a>
								<a class="navbar-item" href="https://www.usecallbox.com/Buyer">Become a Buyer</a>
								<a class="navbar-item" href="https://www.usecallbox.com/Contact">Contact us</a>
								<a class="navbar-item" href="https://www.usecallbox.com/About">About</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
      		<div class="hero-body">
				<div class="container">
					<h1 class="title is-spaced">	What is Callbox?</h1>
					<h2 class="subtitle">
						We are a Pay-per-call marketplace where you can browse inbound call categories and start connecting with new customers today.	</h2>
					
					
						<p class="cta">
						<a class="button is-large" href="https://www.usecallbox.com/GetStarted">
							<svg id="i-download" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
								<path d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 26 L16 30 21 26 M16 16 L16 30"></path>
							</svg>
							&nbsp;
							Get Started
						</a>
						<a class="button is-primary is-large" href="https://dashboard.usecallbox.com/marketplace?lang=en">
							Learn more
						</a>
					</p>
				</div>
        </div>

        
		</section>
        
            <section class="hero-sub">
                    <strong>Browse Our Marketplace</strong> <br/>
                     Increase revenue, track your ROI and grow your client base with real time inbound customers calling your business.
            </section>


		<div class="container">
			<div class="row">
				<div class="column">
					<img src={require('./images/overview_1-a49849218ebbfdc6e7d2a8fbffade5776e987e419896b5d2701b8fed89cd31f0.png')} />
					<h3 id="titly">What is Callbox?</h3> 
						<p class="text-spaced">We are a Pay-per-call marketplace where you can browse inbound call categories and start connecting with new customers today.</p>
				</div>
				<div class="column">
					<img src={require('./images/overview_2-98f2550b68814a83f5dce5507dca01446fcec22b3230340cdd9e6968eb611deb.png')} />
					<h3 id="titly">Buying</h3>
						<p class="text-spaced">Increase revenue, track your ROI and grow your client base with our real time Pay-per-call inbound sales ready leads.</p>
				</div>
				<div class="column">
					<img src={require('./images/overview_3-3b9888d317c5d27828d56b126f4b0ab0f7b21ab7353f33f5c15cf885876fcce6.png')}/>
					<h3 id="titly">Selling</h3> 
						<p class="text-spaced">Become a Trusted Publishers and allow Callbox proprietary Pay-per-call platform to earn you the highest payouts on the market.</p>
				</div>
			</div>
		</div>


		
					
		<div class="container">
		
		
		<div class="content is-narrow is-centered">

		<h2 class="is-centered is-size-2">
			<svg id="i-lightning" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M18 13 L26 2 8 13 14 19 6 30 24 19 Z" />
			</svg>
			Marketplace Features
		</h2>
		</div>
		

						<div class="text-left">		
							<img src={require('./images/feature_1-2cc72a208b498234a01daaa5ea20f4fd9e33b0cbad420e0819d431497ba71b78.png')}/>
							<h1>Buy Calls Instantly</h1>
							<p class="text-spaced">Sign up with Callbox Pay-per-call marketplace as an Advertiser and browse the marketplace for available Call inventory. Place your call order and watch your phones ring with interested clients who have already taken the first step in inquiring about your product. Easily monitor and track your campaigns quality and ad-spend.</p>
						</div>	
						

						<div class="text-right">		
								<img src={require('./images/feature_2-6c76105ce2c8f01e7ce14658949cc8358b30c379f66c1325b77ea01f0a749222.png')}/>
								<h1>Sell Calls Instantly</h1> 
								<p class="text-spaced">Post your call inventory on our Pay-per-call marketplace now and we will notify when the orders come in! Let Callbox proprietary and routing tools distribute your phone calls to the worlds largest Pay Per call Buyer network!</p>
						</div>	

						
						
						<img src={require('./images/feature_2-6c76105ce2c8f01e7ce14658949cc8358b30c379f66c1325b77ea01f0a749222.png')}/>
						<img src={require('./images/feature_3-f416d0eaebe7f8c9e16937b80347ad48662a584a38e1204ff29ebf37b97c4465.png')}/>
						<h1>Track Payments</h1>
						 <p class="text-spaced">Whether you are a Buyer or a Seller, everything is tracked via your Callbox Dashboard. Tracking your spend or revenue has never been so easy.</p>
						
						 <h4>Marketplace</h4> <p>Our self serve marketplace let's you easily create your own pay-per-call campaigns, or discover campaigns you can promote. Apply instantly, and start monetizing your call volume.</p>
						 <h4>Buy calls instanly</h4> <p>Sign up with Callbox as an Advertiser. Then simply create your campaign and start buying calls from our marketplace. Easily monitor and track your campaigns from quality to ad-spend. You never have to touch a piece of tracking technology again.</p>
						 <h4>Sell calls instantly</h4> <p>Got call volume? Then you should sign up as a Publisher. Discover some of the highest paying campaigns on our marketplace. Apply as a Publisher, receive your dedicated numbers and start promoting. Sit back and watch your revenue in your Callbox dashboard in real-time. We’ll make sure you get the highest bids for your calls.</p>
						 <h4>Data &amp; Analytics</h4>
						  <p>Track every data point of your call. We help you understand which campaigns are performing and optimize your traffic respectively. You no longer have to use multiple platforms for marketing your pay-per-call campaigns and tracking your data.</p>
						  <h4>Track payments</h4>
						  <p>Keep track of all your earnings as a publisher, or monitor your ad-spend budget as an advertiser when you buy calls. Watch your revenue data in real-time.</p>
						  <h4>Track call quality</h4>
						   <p>Easily monitor the call quality of every call. Dispute calls which are out of context, right in your Callbox account. Callbox helps publishers and advertisers work better together.</p>
					
			</div>
				                 

  			
			<footer class="footer">
			<div class="container">
				<div class="content has-text-centered">
					<p class="logo">
						<a href="https://www.CallBox.com/">
							<img src={require('./images/logo-purple.svg')} alt="CallBox"/>
						</a>
					</p>

					<p class="footer-links">
						<a href="https://www.usecallbox.com/privacy">Privacy</a>
						<a href="https://www.usecallbox.com/docs">Terms & Conditions</a>
						<a href="https://www.usecallbox.com/about">About</a>
						<a href="https://www.usecallbox.com/contact">Contact</a>
					</p>

					<p>
						<a title="Fork usecallbox on GitHub" href="https://github.com/AliasIO/usecallbox">
							<svg id="i-github" viewBox="0 0 64 64" width="20" height="20">
								<path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"></path>
							</svg>
						</a>

						<a title="Follow usecallbox on Twitter" href="https://twitter.com/usecallbox">
							<svg id="i-twitter" viewBox="0 0 64 64" width="20" height="20">
								<path stroke-width="0" fill="currentColor" d="M60 16 L54 17 L58 12 L51 14 C42 4 28 15 32 24 C16 24 8 12 8 12 C8 12 2 21 12 28 L6 26 C6 32 10 36 17 38 L10 38 C14 46 21 46 21 46 C21 46 15 51 4 51 C37 67 57 37 54 21 Z"></path>
							</svg>
						</a>

						<a title="Join usecallbox on Slack" href="https://join.slack.com/t/usecallbox/shared_invite/enQtMjc1MzA2NzE4NzkwLWM5NGU3Y2U1MWQyNmYzNDUxODU4OTU3MGUxMTliNjJhNWEyMTExYWU5M2ZiYTgzZmQwMjZhNjA1NWRiYWIzN2Y">
							<svg id="i-msg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
								<path d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z"></path>
							</svg>
						</a>
						</p>
					</div>
				</div>
			</footer>



      </div>

      )
    }
  
 
}

export default App;
