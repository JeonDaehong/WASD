package com.web.wasd.controller;

import com.web.wasd.document.UserCollections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.net.URLEncoder;
import java.net.UnknownHostException;
import java.security.SecureRandom;

@Controller
public class MainController extends AbstractController {

    @Autowired
    private MongoTemplate mongoTemplate;

    private String CLIENT_ID = "HTBLazsJV2v8l662RA_U"; //애플리케이션 클라이언트 아이디값";
    private String CLI_SECRET = "eK2nidY2m4"; //애플리케이션 클라이언트 시크릿값";

    /**
     * 로그인 화면이 있는 페이지 컨트롤
     * @param session
     * @param model
     * @return
     * @throws UnsupportedEncodingException
     * @throws UnknownHostException
     */
    @GetMapping(path = "/")
    public ModelAndView MainPage(HttpSession session, Model model) throws UnsupportedEncodingException, UnknownHostException {

        ModelAndView mv = new ModelAndView("main");
        String redirectURI = URLEncoder.encode("http://localhost:8080/naver/callback1", "UTF-8");
        SecureRandom random = new SecureRandom();
        String state = new BigInteger(130, random).toString();
        String apiURL = "https://nid.naver.com/oauth2.0/authorize?response_type=code";
        apiURL += String.format("&client_id=%s&redirect_uri=%s&state=%s",
                CLIENT_ID, redirectURI, state);
        session.setAttribute("state", state);
        model.addAttribute("apiURL", apiURL);

        return mv;
    }

    @GetMapping(path = "/wasdGame")
    public ModelAndView WasdGame() {

        ModelAndView mv = new ModelAndView("wasd");

        return mv;
    }

}
