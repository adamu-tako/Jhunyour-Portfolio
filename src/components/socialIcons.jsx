import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const SocialIcons = ({ direction, heyt, whyte }) => {
  const [hover, setHover] = useState(false);
  const [dhover, setDHover] = useState(false);
  const [bhover, setBHover] = useState(false);
  const [lhover, setLHover] = useState(false);
  const [ihover, setIHover] = useState(false);

  const setHoverFn = (cb, bool) => {
    cb(bool);
  };
  const boxVariant = {
    hidden: {
      x: "-100vw",
      borderLeft: "1px solid #093450",
    },
    visible: {
      x: 0,
      borderLeft: "0",
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    hidden: {
      y: -15,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box
      as={motion.div}
      display="flex"
      flexDir={direction ? `${direction}` : "flerowx"}
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      h={`${heyt ? heyt : "fit-content"}`}
      variants={boxVariant}
      initial="hidden"
      animate="visible">
      <a href="https://www.twitter.com/jhunyouur">
        <Box
          as={motion.div}
          variants={listVariant}
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="3rem"
          borderRadius="50%"
          h="3rem"
          bgColor={`${hover ? "primary" : "transparent"}`}
          onMouseEnter={() => setHoverFn(setHover, true)}
          onMouseLeave={() => setHoverFn(setHover, false)}>
          <svg
            width="29"
            height="24"
            viewBox="0 0 29 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.5534 3.17119C27.5096 3.63369 26.3884 3.94619 25.2096 4.08744C26.4259 3.35968 27.3358 2.21428 27.7696 0.864944C26.627 1.54368 25.3763 2.02144 24.0721 2.27744C23.1951 1.34103 22.0335 0.720351 20.7676 0.511786C19.5016 0.303221 18.2023 0.518433 17.0712 1.12401C15.9401 1.72959 15.0406 2.69165 14.5123 3.86082C13.9841 5.03 13.8566 6.34088 14.1496 7.58994C11.8343 7.47369 9.56918 6.87188 7.50143 5.82358C5.43367 4.77527 3.60945 3.3039 2.14715 1.50494C1.64715 2.36744 1.35965 3.36744 1.35965 4.43244C1.35909 5.39119 1.59519 6.33525 2.047 7.18086C2.4988 8.02647 3.15235 8.74749 3.94965 9.27994C3.02499 9.25052 2.12074 9.00067 1.31215 8.55119V8.62619C1.31206 9.97087 1.77719 11.2742 2.62863 12.3149C3.48006 13.3557 4.66536 14.0699 5.9834 14.3362C5.12563 14.5683 4.22632 14.6025 3.3534 14.4362C3.72527 15.5932 4.44964 16.605 5.42511 17.3299C6.40057 18.0547 7.57829 18.4564 8.7934 18.4787C6.73069 20.098 4.18326 20.9763 1.5609 20.9724C1.09637 20.9726 0.632244 20.9454 0.170898 20.8912C2.83274 22.6027 5.93132 23.511 9.0959 23.5074C19.8084 23.5074 25.6646 14.6349 25.6646 6.93994C25.6646 6.68994 25.6584 6.43744 25.6471 6.18744C26.7863 5.36366 27.7695 4.34356 28.5509 3.17494L28.5534 3.17119Z"
              fill={whyte ? "white" : `${hover ? "white" : "#474747"}`}
            />
          </svg>
        </Box>
      </a>
      <a href="https://www.dribbble.com/jhunyour">
        <Box
          as={motion.div}
          variants={listVariant}
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="3rem"
          borderRadius="50%"
          h="3rem"
          bgColor={`${dhover ? "primary" : "transparent"}`}
          onMouseEnter={() => setHoverFn(setDHover, true)}
          onMouseLeave={() => setHoverFn(setDHover, false)}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26.583 14C26.5851 15.6465 26.2609 17.277 25.6292 18.7974C24.9975 20.3178 24.0707 21.698 22.9024 22.8581C21.7437 24.0148 20.3684 24.9318 18.8551 25.5567C17.3418 26.1816 15.7202 26.5021 14.083 26.5C7.17927 26.5 1.58302 20.9038 1.58302 14C1.57865 10.7949 2.80981 7.71136 5.02052 5.39064C6.18698 4.15976 7.59234 3.17985 9.1506 2.51087C10.7089 1.8419 12.3872 1.49793 14.083 1.50001C15.7202 1.49789 17.3418 1.81844 18.8551 2.44333C20.3684 3.06822 21.7437 3.98521 22.9024 5.14189C24.0707 6.30203 24.9975 7.68218 25.6292 9.2026C26.2609 10.723 26.5851 12.3536 26.583 14V14Z"
              stroke={whyte ? "white" : ` ${dhover ? "white" : "#474747"}`}
              stroke-width="2.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.5837 14C24.7599 14 19.7287 13.3125 15.2255 15.2894C10.3337 17.4375 6.7918 20.7694 5.24805 22.8419"
              stroke={whyte ? "white" : ` ${dhover ? "white" : "#474747"}`}
              stroke-width="2.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.39551 2.40878C11.3518 4.21441 15.6205 8.81128 17.208 13.375C18.7955 17.9388 19.383 23.55 19.7455 25.1469"
              stroke={whyte ? "white" : ` ${dhover ? "white" : "#474747"}`}
              stroke-width="2.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.67969 12.4375C4.04094 12.58 10.2916 12.7081 14.2916 11C18.2916 9.29183 21.7334 6.14995 22.9141 5.15308M2.52094 18.7581C3.62238 21.4243 5.60888 23.6295 8.14594 25.0024"
              stroke={whyte ? "white" : ` ${dhover ? "white" : "#474747"}`}
              stroke-width="2.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.58302 14C1.57865 10.7949 2.80981 7.71136 5.02052 5.39063M14.083 1.50001C12.3872 1.49793 10.7089 1.8419 9.1506 2.51087C7.59234 3.17985 6.18698 4.15976 5.02052 5.39063M19.083 2.54001C20.5065 3.16285 21.8017 4.04516 22.9024 5.14188C24.0707 6.30203 24.9975 7.68218 25.6292 9.2026C26.2609 10.723 26.5851 12.3536 26.583 14C26.583 15.5388 26.3049 17.0131 25.7955 18.375M14.083 26.5C15.7202 26.5021 17.3418 26.1816 18.8551 25.5567C20.3684 24.9318 21.7437 24.0148 22.9024 22.8581"
              stroke={whyte ? "white" : ` ${dhover ? "white" : "#474747"}`}
              stroke-width="2.3125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Box>
      </a>
      <a href="https://www.behance.com/jhunyour">
        <Box
          as={motion.div}
          variants={listVariant}
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="3rem"
          borderRadius="50%"
          h="3rem"
          bgColor={`${bhover ? "primary" : "transparent"}`}
          onMouseEnter={() => setHoverFn(setBHover, true)}
          onMouseLeave={() => setHoverFn(setBHover, false)}>
          <svg
            width="31"
            height="19"
            viewBox="0 0 31 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.667 2.75H18.917V0.25H27.667V2.75ZM29.8245 15.25C29.272 16.8713 27.2882 19 23.4482 19C19.6057 19 16.4932 16.8387 16.4932 11.9062C16.4932 7.01875 19.3995 4.50625 23.3257 4.50625C27.1782 4.50625 29.5307 6.73375 30.0445 10.0388C30.142 10.6713 30.1807 11.5237 30.1632 12.7137H20.1295C20.292 16.7275 24.4832 16.8538 25.8645 15.25H29.8245ZM20.217 10.25H26.4232C26.292 8.31625 25.0032 7.47625 23.327 7.47625C21.4945 7.47625 20.4807 8.43625 20.217 10.25ZM8.24949 18.985H0.166992V0.27625H8.85824C15.7032 0.3775 15.8332 7.08125 12.2582 8.90875C16.5845 10.4838 16.7295 18.985 8.24949 18.985ZM3.91699 7.75H8.39699C11.532 7.75 12.0295 4 8.00699 4H3.91699V7.75ZM8.15574 11.5H3.91699V15.27H8.09324C11.912 15.27 11.6782 11.5 8.15574 11.5Z"
              fill={whyte ? "white" : `${bhover ? "white" : "#474747"}`}
            />
          </svg>
        </Box>
      </a>
      <a href="https://www.linkedin.com/in/muhammad-adamu-52425b1b5">
        <Box
          as={motion.div}
          variants={listVariant}
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="3rem"
          borderRadius="50%"
          h="3rem"
          bgColor={`${lhover ? "primary" : "transparent"}`}
          onMouseEnter={() => setHoverFn(setLHover, true)}
          onMouseLeave={() => setHoverFn(setLHover, false)}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0363 9.21125H14.6787V11.5238C15.3475 10.1938 17.0625 8.99875 19.6388 8.99875C24.5775 8.99875 25.75 11.6463 25.75 16.5037V25.5H20.75V17.61C20.75 14.8438 20.0813 13.2838 18.3787 13.2838C16.0175 13.2838 15.0363 14.965 15.0363 17.6087V25.5H10.0363V9.21125ZM1.4625 25.2875H6.4625V8.99875H1.4625V25.2875ZM7.17875 3.6875C7.17894 4.10659 7.09582 4.52154 6.93423 4.90823C6.77265 5.29492 6.53581 5.64564 6.2375 5.94C5.633 6.54078 4.81476 6.87707 3.9625 6.875C3.11174 6.87443 2.29539 6.539 1.69 5.94125C1.39276 5.64589 1.15673 5.29478 0.99543 4.90804C0.834127 4.5213 0.750724 4.10653 0.75 3.6875C0.75 2.84125 1.0875 2.03125 1.69125 1.43375C2.29611 0.835198 3.1128 0.499626 3.96375 0.5C4.81625 0.5 5.63375 0.83625 6.2375 1.43375C6.84 2.03125 7.17875 2.84125 7.17875 3.6875Z"
              fill={whyte ? "white" : `${lhover ? "white" : "#474747"}`}
            />
          </svg>
        </Box>
      </a>
      <a href="https://www.instagram.com/ux.jhunyour">
        <Box
          as={motion.div}
          variants={listVariant}
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="3rem"
          borderRadius="50%"
          h="3rem"
          bgColor={`${ihover ? "primary" : "transparent"}`}
          onMouseEnter={() => setHoverFn(setIHover, true)}
          onMouseLeave={() => setHoverFn(setIHover, false)}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.3329 8.09471C10.1825 8.09471 8.42763 9.8496 8.42763 12C8.42763 14.1504 10.1825 15.9053 12.3329 15.9053C14.4833 15.9053 16.2382 14.1504 16.2382 12C16.2382 9.8496 14.4833 8.09471 12.3329 8.09471ZM24.0458 12C24.0458 10.3828 24.0604 8.78026 23.9696 7.166C23.8788 5.291 23.4511 3.62694 22.08 2.25585C20.7059 0.881822 19.0448 0.457018 17.1698 0.366197C15.5526 0.275377 13.9501 0.290025 12.3358 0.290025C10.7186 0.290025 9.11611 0.275377 7.50185 0.366197C5.62685 0.457018 3.96279 0.884752 2.59169 2.25585C1.21767 3.62987 0.792864 5.291 0.702043 7.166C0.611223 8.78319 0.625871 10.3857 0.625871 12C0.625871 13.6142 0.611223 15.2197 0.702043 16.834C0.792864 18.709 1.2206 20.373 2.59169 21.7441C3.96572 23.1182 5.62685 23.543 7.50185 23.6338C9.11904 23.7246 10.7216 23.7099 12.3358 23.7099C13.953 23.7099 15.5556 23.7246 17.1698 23.6338C19.0448 23.543 20.7089 23.1152 22.08 21.7441C23.454 20.3701 23.8788 18.709 23.9696 16.834C24.0634 15.2197 24.0458 13.6172 24.0458 12ZM12.3329 18.0088C9.00771 18.0088 6.32411 15.3252 6.32411 12C6.32411 8.67479 9.00771 5.9912 12.3329 5.9912C15.6581 5.9912 18.3417 8.67479 18.3417 12C18.3417 15.3252 15.6581 18.0088 12.3329 18.0088ZM18.5878 7.14842C17.8114 7.14842 17.1845 6.52147 17.1845 5.7451C17.1845 4.96874 17.8114 4.34178 18.5878 4.34178C19.3642 4.34178 19.9911 4.96874 19.9911 5.7451C19.9913 5.92946 19.9552 6.11204 19.8848 6.2824C19.8143 6.45277 19.711 6.60756 19.5806 6.73792C19.4502 6.86827 19.2955 6.97163 19.1251 7.04207C18.9547 7.11252 18.7721 7.14866 18.5878 7.14842Z"
              fill={whyte ? "white" : `${ihover ? "white" : "#474747"}`}
            />
          </svg>
        </Box>
      </a>
    </Box>
  );
};

export default SocialIcons;
