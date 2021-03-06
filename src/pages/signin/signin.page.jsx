import React from "react";

import LockOpenIcon from "@material-ui/icons/LockOpen";

import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";

import SocialLoginController from "../../components/social-login-controller/social-login-controller.container";
import Copyright from "../../components/copyright/copyright.component";
import { useTranslation } from "react-i18next";

import { Providers } from "../../configuration/backend";

import { Paper, Container } from "../../global-styles/containers";
import { LockBox, ButtonBox } from "./signin.styles";

const SignIn = ({ handleSocialLogin, handleSocialLoginError }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Paper>
        <LockBox>
          <LockOpenIcon />
        </LockBox>
        <h1>{t("SignIn.Title")}</h1>
        <ButtonBox>
          <SocialLoginController
            ButtonType={GoogleLoginButton}
            appId={process.env.REACT_APP_GOOGLE_ACCOUNT_ID}
            provider={Providers.google}
            message={t("SignIn.LoginMessageGoogle")}
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginError}
          />
        </ButtonBox>
        <ButtonBox>
          <SocialLoginController
            ButtonType={FacebookLoginButton}
            appId={process.env.REACT_APP_FACEBOOK_ACCOUNT_ID}
            provider={Providers.facebook}
            message={t("SignIn.LoginMessageFacebook")}
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginError}
          />
        </ButtonBox>
        <Copyright />
      </Paper>
    </Container>
  );
};

export default SignIn;
