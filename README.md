# LVD-FluentUi-PasswordRecoveryBox

A ReactJS password change box component built using the FluentUI library

## Installation
<a name="c-installation"></a>

`npm install --save lvd-fluentui-passwordrecoverybox`

## Basic Usage
<a name="c-basic-usage"></a>

```javascript
import React from 'react';
import { PasswordRecoveryBox } from 'lvd-fluentui-passwordrecoverybox';

class PasswordRecoveryBoxSamplePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<PasswordRecoveryBox 

			/>
		);
	}
}
```

You can find a full working example [here]().

## Styling
<a name="c-styling"></a>

You can either directly include the `dist/style.css` into your `html` web page or use the `@import` directive inside your stylesheet if building using webpack:

```css
@import '~lvd-fluentui-passwordrecoverybox/dist/style.css';
```

Also see [the component itself]().


## Building
<a name="c-building"></a>

To build the demo application: 

```
npm run build-app
```

To build the library: 

```
npm run build-dist
```

To build both in one sitting: 

```
npm run build
```

## Customization Options
<a name="c-customization"></a>

| What | Prop Name | Type | Notes |
| --- | --- | --- | --- |

## Events
<a name="c-events"></a>

| Event | Prop Name | Arguments | Notes |
| --- | --- | --- | --- |

## Changelog
<a name="c-changelog"></a>

### Version 0.0.1

- First tracked version.

## Donate
<a name="c-donate"></a>

I put some of my free time into developing and maintaining this plugin.
If helped you in your projects and you are happy with it, you can...