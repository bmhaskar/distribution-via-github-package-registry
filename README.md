# distribution-via-github-package-registry
This is strategy to do migration of monolith to React based UI with a project demonstarting distribution of npm packages via github package registry 

## Problem

I have faced a scenario where organisation is in process of defining a design system 
for it's existing monolith full-stack application and rapidly do migration into the React based 
frontend.

Another need is  to build a platform so that the features can be exported into external web applications and should be consumed seamleaslly as good as HTML tags.  

## Proposed solution 

For this there are multiple teams working parallely. Each team is trying to build a "micro-frontend" within the scope of React. The outcome is a components encapsulating the feature as a library.  These indipendent web-apps will be stiched together into full-stack views 

```bash 
.
├── client-pages
```
Shows posible way of consumption

```bash
└── frontends
```
Shows possible code to maintain multiple components and microfrontends managed with lerna, yarn workspaces. These are distributed via github package registry 

```bash 
.
└── packages
    ├── component-library
    │   ├── component1
    │   │   ├── dist
    │   │   └── src
    │   └── component2
    │       ├── dist
    │       └── src
    └── web-apps
        ├── microfrontend1
        │   ├── dist
        │   └── src
        └── microfrontend2
            ├── dist
            └── src
```



## Long term vision 

Is to wrap these web-apps as web-components or custom elements (based on what becomes stable) so that they can be shared with other developers / clients 
 
