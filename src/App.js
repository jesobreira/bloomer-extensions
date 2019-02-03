import React, { Component, Fragment } from 'react';


import 'bulma';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

import { Hero, HeroHeader, HeroBody, HeroFooter,
         Nav, NavLeft, NavCenter, NavRight, NavItem,
         Navbar, NavbarItem, NavbarLink, NavbarDivider, NavbarBrand, NavbarBurger, NavbarMenu, NavbarStart, NavbarDropdown, NavbarEnd, NavbarTabs,
         Field,
         Control,
         Button,
         Tabs, TabList, TabLink, Tab,
         Container,
         Title, Subtitle,
         Icon,
         Delete,
         Tag } from 'bloomer'

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
  } from './components'

class App extends Component {
  state = {
    isBurgerActive: false,
    quickview: true
  }
  render() {
    return (
      <Fragment>
        <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
          <NavbarBrand>
              <NavbarItem>
                  Bloomer-extensions
              </NavbarItem>
              <NavbarItem isHidden='desktop'>
                  <Icon className='fa fa-github' />
              </NavbarItem>
              <NavbarBurger isActive={this.state.isBurgerActive} onClick={() => this.setState({ isBurgerActive: !this.state.isBurgerActive})} />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
              <NavbarStart>
                  <NavbarItem href='#/'>Home</NavbarItem>
                  <NavbarItem hasDropdown isHoverable>
                      <NavbarLink href='#/documentation'>Other Projects</NavbarLink>
                      <NavbarDropdown>
                          <NavbarItem href='https://bulma.io'>Bulma</NavbarItem>
                          <NavbarItem href="https://wikiki.github.io">Bulma extensions</NavbarItem>
                          <NavbarDivider />
                          <NavbarItem href='https://jesobreira.github.io/Bulma-Form-Builder/'>Bulma Form Builder</NavbarItem>
                      </NavbarDropdown>
                  </NavbarItem>
              </NavbarStart>
              <NavbarEnd>
                  <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden='touch'>
                      <Icon className='fa fa-github' />
                  </NavbarItem>
                  <NavbarItem href="https://twitter.com/AlgusDark" isHidden='touch'>
                      <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
                  </NavbarItem>
                  <NavbarItem>
                      <Field isGrouped>
                          <Control>
                              <Button id="twitter" data-social-network="Twitter" data-social-action="tweet"
                              data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer:
                              a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                                  <Icon className="fa fa-twitter" />
                                  <span>Tweet</span>
                              </Button>
                          </Control>
                      </Field>
                  </NavbarItem>
              </NavbarEnd>
          </NavbarMenu>
        </Navbar>
        <Hero isColor='primary' isSize='small'>
            <HeroBody>
                <Container>
                    <Title>Bloomer Extensions</Title>
                    <Subtitle>React components for bulma-extensions</Subtitle>
                </Container>
            </HeroBody>

            <HeroFooter>
                <Tabs>
                    <Container>
                        <TabList>
                            <Tab isActive><TabLink>Overview</TabLink></Tab>
                            <Tab><TabLink>Layout</TabLink></Tab>
                            <Tab><TabLink>Form</TabLink></Tab>
                            <Tab><TabLink>Elements</TabLink></Tab>
                            <Tab><TabLink>Components</TabLink></Tab>
                        </TabList>
                    </Container>
                </Tabs>
            </HeroFooter>
          </Hero>
          <Container>
          
            <Divider />
            <Divider isVertical />
            <Divider content="HI" />

          <PageLoader isActive>
            Test
          </PageLoader>

          <ToolTip text="Hey">Test</ToolTip>

          <Badge text="8">
            <button class="button">Test</button>
          </Badge>

          <CheckRadio id="test" checked={this.state.checkradioChecked} onClick={() => this.setState({ checkradioChecked: !this.state.checkradioChecked })}>Click me</Checkradio>
          <CheckRadio type="radio" name="myGroup" id="opt1" value="1" checked>Option 1</Checkradio>
          <CheckRadio type="radio" name="myGroup" id="opt2" value="2">Option 2</Checkradio>


          <Slider value={this.state.sliderValue} onChange={(e) => this.setState({ sliderValue: e.target.value })} />
          { this.state.sliderValue || 50 }

          <CheckSwitch checked={this.state.checkswitchChecked} onClick={() => this.setState({ checkswitchChecked: !this.state.checkswitchChecked })}>
            Check me
          </CheckSwitch>

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

          


          </Container>
        </Fragment>
    );
  }
}

export default App;
