## World-Wide-Warning ( Focus on Android )
- The Covid-19 outbreak was started in China at the end of 2019.  Over time, the virus has spread around the world and countries have strengthened their own standards for allowing foreigners to enter the country. 
- In this era of pandemic, we want to create a mobile service that provides information such as entry permit requirements, information on infectious diseases, security, and natural disasters for people planning to enter and leave the country. 
- The service allows users to establish travel plans or considerations for plans by referring to infectious diseases, entry restrictions or permits required for entry, and risk safety information with regard to the country that users are interested in. 
- In order to make this possible, we develop an application that shows corresponding information on the mobile web by calling open APIs such as the status of overseas corona outbreaks and global safety information provided by public data portals. 
- By using an open-source mobile application framework developed by Facebook called "React Native", it develops and distributes Android applications to users so that they can use the service.



# How React Native Works ?
React Native render the app items by using special tag 'JSX'. Except tag, most of code is JS code. Using JS code, If you tell React Native to do something (through Virtual Machine) and then RN will render the app items based on JS code & JSX tag.

# Expo vs RN CLI
- Expo CLI
: 간단한 앱을 만드는 초보자들에게 추천, 초기접근이 쉽고 안드로이드의 AVD 같은 emulator 가 따로 필요하지 않음

- RN CLI
: Full - manage - control 복잡한 어플 만들 때, 어느 정도 숙달된 사람들, AVD 필요

# RN is a "Fast-Moving Target"
- RN 은 버전의 변화가 빠르기 때문에 그때 그때에 맞는 버전에 요구되는 컴포넌트 렌더링 하는 방법을 숙지해야함

- expo 사용시에는 expo에서 알아서 처리를 해주는게 대부분이고, bareboned RN 개발시에는 위처럼 FMT에 주의가 요구됨

# The Standard order of the building a App

1. DownLoad some dependencies you'll need(expectation)

2. Adding a Custom Header Component
- It is better to split your app into mutiple components which you then compose together
- For the main concept of the App(such as colors, size, etc...), we should make constants folder that include the collection of the concept

3. Adding a Screen Component 
- Screens.js files should be in 'screen' folder as Components.js file are in component folder
- This seperation is helpful for reusability & flexiblity


# How To Debug ?
(1). Chrome debugger and breakpoints is a great tool and it's supported by React Native, both when you’re using expo or when you’re not using expo
-> Remote Debugger & Breakpoints
-> In IOS : command + D
-> In Android : ctrl + M (Debug JS remotely)

(2). Understanding Code Folow with 
console.log()

(3). If you hard to find some error or you want to dive into the style and see what's going on there, RN-Debugger will be better to examine them.
