<div style="text-align:center;">
  <img src="https://i.ibb.co/KL5bxHs/design-ui-logo.png" style="height:250px;"/>
  <br>

<sub>a fully customizable design system w/ **styled-components**</sub>

</div>
<br>
<br />

[![version](https://img.shields.io/npm/v/@design-ui/styled.svg?style=flat-square)](http://npm.im/@design-ui/styled)
[![MIT License](https://img.shields.io/npm/l/@design-ui/styled.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## **Description**

**Design-UI** is a starter template built on top of `create-react-app v2+` to give you the ability to create a design system from scratch with :

- `styled-components` ([ _docs_ ](https://www.styled-components.com/))
- `React v16.8+` ([ _docs_ ](https://reactjs.org/))
- `Docz` ([ _docs_ ](https://www.docz.site))

## **Styling Components**

You can use the styled-components standalone or as wrappers for your React components that contain additional logic to separate concerns

### Basic Usage w/ Default Styles

```html
// Standalone
<DesignButton />

// Wrapper
<DesignButton>
  <ReactComponent />
</DesignButton>
```

### Custom Styling

```html
// Customizable Style Props
<DesignButton
  bg="rebeccapurple"
  bgActive="#6b41d2"
  color="#444"
  colorActive="#fff"
  br="5px"
/>
```

## **Documentation**

**Docz** ( _.mdx_ ) documentation files are represented in each component folder but can be rearranged to suit your desired project structure

<img src="https://i.ibb.co/Phbpcxq/Screen-Shot-2019-02-23-at-2-37-23-PM.png" alt="Screen-Shot-2019-02-23-at-2-37-23-PM" height="200px;">

You can customize documentation styling in the **doczrc.js** file at the root of the default project

## **Testing**

The template comes with out-of-the-box testing with `jest` for your React components (_included with `create-react-app`_) and `jest-styled-components` for your Styled components

<br />

## **Tooling**

[Style Linting](https://www.npmjs.com/package/stylelint) is included by default and its configuration can be customized in the **.stylelintrc** file at the root of the project

<br />

---

## **Getting Started**

### Installation

```bash
npm install @design-ui/styled
```

To get up and running with your design system:

```bash
# Install Your Dependencies
yarn

# Run Your Test Suite
yarn test

# Lint Your Styled Components
yarn lint:css

# Serve Your Documentation
yarn docs
```

<br />

---

## **Contributors**

### Built with 💖 by this human:

[<img src="https://avatars3.githubusercontent.com/u/10368585?s=460&v=4" alt="Jazz Lyles" width="75px;" style="border-radius:50%;" />](https:/jazz-lyles.com/)<br />
[✉️](mailto:ripley36706@gmail.com)
