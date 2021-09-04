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

## Demo
<a name="c-demo"></a>

The `demo` directory contains [a compiled and ready-to-run example](https://github.com/alexboia/LVD-FluentUi-PasswordRecoveryBox/tree/main/demo). Just open up the `index.html` file.

## Basic Usage
<a name="c-basic-usage"></a>

Handling the first step of the password recovery process:

```javascript
import React from 'react';
import { PasswordRecoveryBox, PasswordRecoverySteps } from 'lvd-fluentui-passwordrecoverybox';

class PasswordRecoveryBoxStep1SamplePage extends React.Component {
	constructor(props) {
		super(props);

		this._handlePasswordRecoveryInitiationValuesChanged = 
			this._handlePasswordRecoveryInitiationValuesChanged.bind(this);
		this._handlePasswordRecoveryInitiationRequested =
			this._handlePasswordRecoveryInitiationRequested.bind(this);
	}

	_handlePasswordRecoveryInitiationValuesChanged(oldValues, newValues) {
		//do something, if desired
	}

	_handlePasswordRecoveryInitiationRequested(newValues) {
		//lookup identification, send recovery link if valid
	}

	render() {
		return (
			<PasswordRecoveryBox 
				step={PasswordRecoverySteps.CollectUserIdentifier}
				messageProps={/* use this to display a message after processing */}
				onPasswordRecoveryInitiationValuesChanged={this._handlePasswordRecoveryInitiationValuesChanged}
				onPasswordRecoveryInitiationRequested={this._handlePasswordRecoveryInitiationRequested}
			/>
		);
	}
}
```

Handling the second step of the password recovery process:

```javascript
import React from 'react';
import { PasswordRecoveryBox, PasswordRecoverySteps } from 'lvd-fluentui-passwordrecoverybox';

class PasswordRecoveryBoxStep2SamplePage extends React.Component {
	constructor(props) {
		super(props);

		this._handlePasswordChangeValuesChanged = 
			this._handlePasswordChangeValuesChanged.bind(this);
		this._handlePasswordChangedRequested = 
			this._handlePasswordChangedRequested.bind(this);
	}

	_handlePasswordChangeValuesChanged(oldValues, newValues) {
		//do something, if desired
	}

	_handlePasswordChangedRequested(values) {
		//validate and change new password
	}

	render() {
		return (
			<PasswordRecoveryBox 
				step={PasswordRecoverySteps.EnterNewPassword}
				messageProps={/* use this to display a message after processing */}
				onPasswordChangeValuesChanged={this._handlePasswordChangeValuesChanged}
				onPasswordChangedRequested={this._handlePasswordChangedRequested}
			/>
		);
	}
}
```

You can find a full working example [here](https://github.com/alexboia/LVD-FluentUi-PasswordRecoveryBox/blob/main/src/App.jsx).

## Styling
<a name="c-styling"></a>

You can either directly include the `dist/style.css` into your `html` web page or use the `@import` directive inside your stylesheet if building using webpack:

```css
@import '~lvd-fluentui-passwordrecoverybox/dist/style.css';
```

Also see [the component itself](https://github.com/alexboia/LVD-FluentUi-PasswordRecoveryBox/blob/main/src/components/PasswordRecoveryBox.jsx).


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

## Forwarded APIs

For convenience, the following API artefacts are forwarded from the underlying password change box component (which itself, forwards them from the underyling [password box component](https://github.com/alexboia/LVD-FluentUi-PasswordBox)):

- `PasswordCallbackRule`,
- `PasswordRegexRule`,
- `PasswordEvaluator`,
- `PasswordLengthRule`,

- `PasswordStrengthIndicator`,
- `StrengthIndicatorStyles`,
- `PasswordStrengthLevels`,

- `getAllAvailableLevels`,
- `getAvailableLevelCount`.

## Customization Options
<a name="c-customization"></a>

| What | Prop Name | Type | Notes |
| --- | --- | --- | --- |

## User Identification Values Object
<a name="c-userid-values"></a>

The user identification values are exported as a plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `userIdentifier` | `string` | - |

## Events
<a name="c-events"></a>

| Event | Prop Name | Arguments | Notes |
| --- | --- | --- | --- |
| User identfication values changed - Step 1 | `onPasswordRecoveryInitiationValuesChanged` | (`oldValues`:`User Identification Values Object`, `newValues`:`User Identification Values Object`) | Triggered whenerver any of fields from step 1 changes. |
| Password recovery initation requested - Step 1 | `onPasswordRecoveryInitiationRequested` | (`User Identification Values Object`) | Trigered whenever the `Recovery my password` button is clicked |
| Navigate back from Step 1 | `onBackFromPasswordRecoveryInitiationRequested` | (`User Identification Values Object`) | Triggered whenever the `Back` button is clicked when Step 1 is active. |

## Changelog
<a name="c-changelog"></a>

### Version 0.0.1

- First tracked version.

## Donate
<a name="c-donate"></a>

I put some of my free time into developing and maintaining this plugin.
If helped you in your projects and you are happy with it, you can...

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q01KGLM)