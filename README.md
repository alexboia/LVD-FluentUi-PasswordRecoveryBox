# LVD-FluentUi-PasswordRecoveryBox

A ReactJS password recovery box built using the [FluentUI library](https://github.com/microsoft/fluentui), comprised of two steps:

- password identification step - user provides some sort of identification to kick of the process;
- password change step - user enters a new password, after a password recovery link has been sent to the user's e-mail address.

For the password change step, the [LVD-FluentUi-PasswordChangeBox](https://github.com/alexboia/LVD-FluentUi-PasswordChangeBox) is used, to which all its documented props are forwarded.

Here's a set screenshots of how it all looks like [using the default styling](https://github.com/alexboia/LVD-FluentUi-PasswordRecoveryBox/blob/main/src/css/style.css):

<p align="left">
	<img align="center" src="https://raw.githubusercontent.com/alexboia/LVD-FluentUi-PasswordRecoveryBox/main/docs/Capture-Step1.png" style="margin-bottom: 20px; margin-right: 20px; border-radius: 5px;" />
</p>

<p align="left">
	<img align="center" src="https://raw.githubusercontent.com/alexboia/LVD-FluentUi-PasswordRecoveryBox/main/docs/Capture-Step2.png" style="margin-bottom: 20px; margin-right: 20px; border-radius: 5px;" />
</p>

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