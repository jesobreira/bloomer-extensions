# bloomer-extensions

React components for [bulma-extensions](https://wikiki.github.io).

**THIS IS A WORK-IN-PROGRESS**

# Installing

Remember that this is a work-in-progress and therefore future changes are impossible. We do follow [Semantic Versioning](https://semver.org), which allows you to identify whether a change is breaking or not. But bugs are also possible, therefore, using this library in production is not recommended, yet, and shall be done under your risk. PRs are always welcome.

```
npm i bloomer-extensions
```

# TO-DO

- [ ] **Proper testing**
- [ ] Documentation and examples
- [ ] Carousel
- [x] CheckRadio
- [x] Divider
- [ ] IconPicker
- [x] PageLoader
- [ ] PricingTable
- [x] QuickView
- [ ] Ribbon
- [x] Slider
- [x] Steps
- [ ] TagsInput
- [x] Timeline
- [x] ToolTip

# Usage

As stated above, proper documentation is yet in the TO-DO list, and using this library in production is not recommended yet. But if you want to try it yourself or even help with PRs, here are a few examples:

```
import {  Divider,
          PageLoader,
          ToolTip,
          Badge,
          CheckRadio,
          Slider,
          CheckSwitch,
          QuickView, QuickViewHeader, QuickViewBody, QuickViewBlock, QuickViewFooter,
          Steps, StepItem, StepMarker, StepDetails, StepTitle,
          Timeline, TimelineHeader, TimelineItem, TimelineMarker, TimelineContent
  } from 'bloomer-extensions'
```

## Divider

```
<Divider />
<Divider isVertical />
<Divider content="HI" />
```

## PageLoader

```
<PageLoader isActive>
	Test
</PageLoader>
```

## ToolTip
```
<ToolTip text="Hey">Test</ToolTip>
```

## Badge
```
<Badge text="8">
	<button class="button">Test</button>
</Badge>
```

## CheckRadio

```
<CheckRadio id="test" checked={this.state.checkradioChecked} onClick={() => this.setState({ checkradioChecked: !this.state.checkradioChecked })}>Click me</Checkradio>

<CheckRadio type="radio" name="myGroup" id="opt1" value="1" checked>Option 1</Checkradio>

<CheckRadio type="radio" name="myGroup" id="opt2" value="2">Option 2</Checkradio>

```

## Slider

```
<Slider value={this.state.sliderValue} onChange={(e) => this.setState({ sliderValue: e.target.value })} />
<p>{ this.state.sliderValue || 50 }</p>
```

## CheckSwitch

```
<CheckSwitch checked={this.state.checkswitchChecked} onClick={() => this.setState({ checkswitchChecked: !this.state.checkswitchChecked })}>
	Check me
</CheckSwitch>
```

## QuickView

```
<QuickView isActive={this.state.quickview}>
	<QuickViewHeader>
	  Title
	  <Delete onClick={() => this.setState({ quickview: false })} />
	</QuickViewHeader>

	<QuickViewBody>
	  <QuickViewBlock>
	    Hello, world
	  </QuickViewBlock>
	</QuickViewBody>

	<QuickViewFooter>
	  Footer
	</QuickViewFooter>
</QuickView>
```

## Steps

```
  <Steps isSize='large'>
    <StepItem isCompleted isColor='info'>
      <StepMarker>
        ✓
      </StepMarker>
      <StepDetails>
        <StepTitle>Step 1</StepTitle>
        <p>Steps' first step</p>
      </StepDetails>
    </StepItem>

    <StepItem isActive>
      <StepMarker>
        ✓
      </StepMarker>
      <StepDetails>
        <StepTitle>Step 2</StepTitle>
        <p>Steps' second step</p>
      </StepDetails>
    </StepItem>

    <StepItem>
      <StepMarker>
        ✓
      </StepMarker>
      <StepDetails>
        <StepTitle>Step 3</StepTitle>
        <p>Steps' third step</p>
      </StepDetails>
    </StepItem>

    <StepItem>
      <StepMarker>
        ✓
      </StepMarker>
      <StepDetails>
        <StepTitle>Step 4</StepTitle>
        <p>Steps' final step</p>
      </StepDetails>
    </StepItem>

  </Steps>
```

## Timeline

```
  <Timeline>

    <TimelineHeader>
      <Tag isSize='medium' isColor='primary'>Start</Tag>
    </TimelineHeader>

    <TimelineItem>
      <TimelineMarker />
      <TimelineContent>
        <p class="heading">January 2016</p>
        <p>Timeline content</p>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineMarker isColor='info' isSize='medium' />
      <TimelineContent>
        <p class="heading">January 2017</p>
        <p>Timeline content</p>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelineMarker isColor='info' isSize='medium' isIcon>
        ✓
       </TimelineMarker>
      <TimelineContent>
        <p class="heading">January 2017</p>
        <p>Timeline content</p>
      </TimelineContent>
    </TimelineItem>

  </Timeline>
```

# License

MIT.