import React from 'react'
import '../../Assets/css/Footer.css'
import { BsFacebook,BsTwitter,BsInstagram,BsYoutube,BsLinkedin,BsWhatsapp,BsTelegram } from "react-icons/bs";
import { BiLogoGmail,BiLogoPinterestAlt } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
        <div class="row mb-5">
            <div class="col-md-6 col-lg-3">
                <div class="ftco-footer-widget mb-5">
                    <h2 class="ftco-heading-2">Get in Touch</h2>
                    <div class="">
                        <ul class="list-unstyled">
                            <li><AiOutlineArrowRight/><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Sitemap</a></li>
                            <li><AiOutlineArrowRight/><a href="https://daffodilvarsity.edu.bd/article/contact"><span class="ion-ios-arrow-round-forward mr-2"></span>Contact</a></li><a href="https://daffodilvarsity.edu.bd/article/contact">
                            </a><AiOutlineArrowRight/><li><a href="https://daffodilvarsity.edu.bd/article/contact"></a><a href="https://pd.daffodilvarsity.edu.bd/contact-us" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>Meet With Us</a></li>
                            <li><AiOutlineArrowRight/><a href="#"><span class="ion-ios-arrow-round-forward mr-2"></span>Privacy Statement</a></li>
                            <li><AiOutlineArrowRight/><a href="https://daffodilvarsity.edu.bd/article/copyright-issue"><span class="ion-ios-arrow-round-forward mr-2"></span>Report Copyright Infringement</a></li>
                            <li><AiOutlineArrowRight/><a href="https://daffodilvarsity.edu.bd/article/security-issues"><span class="ion-ios-arrow-round-forward mr-2"></span>Report on Security Issues</a></li>
                            <li><AiOutlineArrowRight/><a href="https://daffodilvarsity.edu.bd/photos/pdf/Report-on-traffic-mgt.pdf" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>Recom. For Traffic Mgt</a></li>
                            <li><AiOutlineArrowRight/><a href="https://newsletter.daffodilvarsity.edu.bd/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>Newsletters</a></li>
                            <li><AiOutlineArrowRight/><a href="https://daffodilvarsity.edu.bd/location"><span class="ion-ios-arrow-round-forward mr-2"></span>Location Map</a></li>
                            <li><AiOutlineArrowRight/><a href="https://daffodilvarsity.edu.bd/article/corona"><span class="ion-ios-arrow-round-forward mr-2"></span>Covid-19 updates</a></li>
                            <li><AiOutlineArrowRight/><a href="https://daffodil.family/about/family-logo" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>Logos (Daffodil Family) </a></li>
                            <li><AiOutlineArrowRight/><a class="nav-link text-white" data-toggle="modal" data-target="#queryModal">Feedback</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="ftco-footer-widget mb-5 ml-md-4">
                    <h2 class="ftco-heading-2">Branding</h2>
                    <ul class="list-unstyled">
                        <li><AiOutlineArrowRight/><a href="http://bd.daffodil.family/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>DIU Branding</a></li>
                        <li><AiOutlineArrowRight/><a href="http://career.daffodilvarsity.edu.bd/?app=home" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>Career Opportunities</a></li>
                        <li><AiOutlineArrowRight/><a href="http://blog.daffodilvarsity.edu.bd/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>Blog</a></li>
                        <li><AiOutlineArrowRight/><a href="http://campuslife.daffodil.university/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>Photo Gallery</a></li>
                        <li><AiOutlineArrowRight/><a href="http://news.daffodilvarsity.edu.bd/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>DIU News</a></li>
                        <li><AiOutlineArrowRight/><a href="http://diupress.com/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>DIU Press</a></li>
                        <li><AiOutlineArrowRight/><a href="http://employability.daffodilvarsity.edu.bd/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>Employability 360</a></li>
                        <li><AiOutlineArrowRight/><a href="https://it.daffodilvarsity.edu.bd/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>DIU IT</a></li>
                        <li><AiOutlineArrowRight/><a href="https://etender.daffodilvarsity.edu.bd/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>eTender</a></li>
                        <li><AiOutlineArrowRight/><a href="http://artofliving.social/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>Artofliving</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="ftco-footer-widget mb-5 ml-md-4">
                    <h2 class="ftco-heading-2">Useful Links</h2>
                    <ul class="list-unstyled">
                        <li><AiOutlineArrowRight/><a href="https://skill.jobs/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>skill.jobs</a></li>
                        <li><AiOutlineArrowRight/><a href="http://internship.daffodilvarsity.edu.bd/?app=home" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>Internship Portal</a></li>
                        <li><AiOutlineArrowRight/><a href="https://fd.daffodilvarsity.edu.bd/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>Foundation Day</a></li>
                        <li><AiOutlineArrowRight/><a href="https://convocation.daffodilvarsity.edu.bd/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>Convocation</a></li>
                        <li><AiOutlineArrowRight/><a href="/annual-report/2022/" target="_blank"><span class="ion-ios-arrow-round-forward mr-2"></span>DIU Annual Report</a></li>
                        <li><AiOutlineArrowRight/><a href="https://daffodilvarsity.edu.bd/article/brochure"><span class="ion-ios-arrow-round-forward mr-2"></span>Brochure</a></li>
                        <li><AiOutlineArrowRight/><a href="https://daffodilvarsity.edu.bd/prospectus"><span class="ion-ios-arrow-round-forward mr-2"></span>Prospectus</a></li>
                        <li><AiOutlineArrowRight/><a href="https://daffodilvarsity.edu.bd/article/forms"><span class="ion-ios-arrow-round-forward mr-2"></span>Forms</a></li>
                        <li><AiOutlineArrowRight/><a href="https://daffodilvarsity.edu.bd/article/downloads"><span class="ion-ios-arrow-round-forward mr-2"></span>Brand Documents</a></li>
                        <li><AiOutlineArrowRight/><a href="https://daffodilvarsity.edu.bd/article/apps"><span class="ion-ios-arrow-round-forward mr-2"></span>Apps</a></li>
                        <li><AiOutlineArrowRight/><a href="https://daffodilvarsity.edu.bd/faq"><span class="ion-ios-arrow-round-forward mr-2"></span>FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="ftco-footer-widget mb-5">
                    <h2 class="ftco-heading-2">Subscribe Us!</h2>
                    <form action="https://daffodilvarsity.edu.bd/save/subscriber" method="post" class="subscribe-form">
                            <input type="email" name="email" class="form-control mb-2 text-center" placeholder="Enter email address"/>
                            <input type="submit" value="Subscribe" class="form-control submit px-3" />
                    </form>
                </div>
                <div class="ftco-footer-widget mb-5">
                    <h2 class="ftco-heading-2 mb-0">Connect With Us</h2>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-sm-6'>
                        <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                        <li class="ftco-animate fadeInUp ftco-animated"><a href="https://www.facebook.com/daffodilvarsity.edu.bd" target="_blank"><BsFacebook/></a></li>
                        <li class="ftco-animate fadeInUp ftco-animated"><a href="https://twitter.com/daffodilvarsity" target="_blank"><BsTwitter/></a></li>
                        <li class="ftco-animate fadeInUp ftco-animated"><a href="https://www.instagram.com/daffodil.university/" target="_blank"><BsInstagram/></a></li>
                        <li class="ftco-animate fadeInUp ftco-animated"><a href="https://www.youtube.com/user/webmasterdiu" target="_blank"><BsYoutube/></a></li>
                        <li class="ftco-animate fadeInUp ftco-animated"><a href="https://www.linkedin.com/company/daffodil-international-university/" target="_blank"><BsLinkedin/></a></li>
                    </ul>
                        </div>
                        <div className='col-sm-6'>
                          <ul>
                          <li class="ftco-animate fadeInUp ftco-animated"><a href="https://www.pinterest.com/daffodilvarsity/" target="_blank"><BiLogoPinterestAlt/></a></li>
                          <li class="ftco-animate"><a href="https://daffodilvarsity.edu.bd/article/whatsapp"><BsWhatsapp/></a></li>
                          <li class="ftco-animate fadeInUp ftco-animated"><a href="tel:+8801713493000"><BsTelegram/></a></li>
                          <li class="ftco-animate fadeInUp ftco-animated"><a href="https://gmail.com/" target="_blank"><BiLogoGmail/></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row border-top">
            <div class="col-md-12 text-center">
                   <div class="text-white pt-3"> Copyright © 2023 Daffodil International University. All Rights Reserved.</div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
