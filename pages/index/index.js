import Layout from 'components/Layout';
import Wrapper from 'components/Wrapper';
import Hero from 'components/Hero';
import Highlight from 'components/Highlight';
import Button from 'components/Button';
import Checks from 'components/Checks';
import UseCases from 'components/UseCases';
import Numbers, { Block as NumbersBlock } from 'components/Numbers';
import PersonasPicker from 'components/PersonasPicker';
import InterstitialTitle from 'components/InterstitialTitle';
import TitleStripWithContent from 'components/TitleStripWithContent';
import Result from 'components/Result';
import Flag, { Highlight as FlagHighlight } from 'components/Flag';
import Bullets from 'components/Bullets';
import Quote from 'components/Quote';
import LogosBar from 'components/LogosBar';
import { withDato } from 'lib/datocms';

import Ill1 from 'public/images/illustrations/dato-svg-4-02.svg';
import Ill2 from 'public/images/illustrations/dato-svg-3a-01.svg';
import Ill3 from 'public/images/illustrations/dato-svg-5-03.svg';

import Ill4 from 'public/images/illustrations/dato-svg-2a-01.svg';
import Ill5 from 'public/images/illustrations/dato-svg-6-04.svg';
import Ill6 from 'public/images/illustrations/dato-svg-8-02.svg';

import Nike from 'public/images/clients/nike.svg';
import Arduino from 'public/images/clients/arduino.svg';
import Linkedin from 'public/images/clients/linkedin.svg';

import WarningIcon from 'public/icons/regular/exclamation-circle.svg';
import SuccessIcon from 'public/icons/regular/check-circle.svg';

import styles from './style.css';

function Homepage() {
  return (
    <Layout>
      <Hero
        title={
          <>
            The&nbsp;best companies are&nbsp;built&nbsp;on{' '}
            <Highlight>unified&nbsp;content</Highlight>
          </>
        }
        subtitle={
          <>
            More than 4.000 businesses use DatoCMS to create their online
            content at scale from a central hub, and distribute it easily via
            API to websites and any other digital experience.
          </>
        }
      >
        <Checks checks={['No credit card', 'Easy setup']}>
          <Button fs="big">Try it now for free!</Button>
        </Checks>
      </Hero>

      <LogosBar />

      <div style={{ margin: '15vh 0' }}>
        <InterstitialTitle subtitle="Here’s 3 symptoms to watch out">
          Are you losing money because of{' '}
          <Highlight>legacy content&nbsp;infrastructure</Highlight>?
        </InterstitialTitle>
      </div>

      <Flag
        style="bad"
        title={
          <>
            Is content spread across{' '}
            <FlagHighlight style="bad">endless different CMSs</FlagHighlight>?
          </>
        }
        image={Ill1}
      >
        <p>
          How can you deliver a cohesive brand and message strategy if your
          company functions in silos and information is manually copy-pasted
          across tens of different platforms?
        </p>
        <Bullets
          style="bad"
          icon={WarningIcon}
          bullets={[
            'Out-of-sync content',
            'Redundant expenses',
            'Internal inefficiencies',
          ]}
        />
      </Flag>

      <Flag
        style="bad"
        title={
          <>
            Are you slowed down&nbsp;by{' '}
            <FlagHighlight style="bad">legacy&nbsp;technology?</FlagHighlight>
          </>
        }
        image={Ill2}
      >
        <p>
          How can you deliver a cohesive brand and message strategy if your
          company functions in silos and information is manually copy-pasted
          across tens of different platforms?
        </p>
        <Bullets
          style="bad"
          icon={WarningIcon}
          bullets={[
            'Slow development times',
            'Rigid structures and models',
            'Low-performant websites and apps',
          ]}
        />
      </Flag>

      <Flag
        style="bad"
        title={
          <>
            Is your infrastructure{' '}
            <FlagHighlight style="bad">ready&nbsp;for&nbsp;scale?</FlagHighlight>
          </>
        }
        image={Ill3}
      >
        <p>
          New channels, new markets, complex use cases, fast iterations. You can
          no longer afford to think locally. You need to have a reliable
          solution that is capable of following your growth, globally, and lets
          you adapt along the journey.
        </p>
        <Bullets
          style="bad"
          icon={WarningIcon}
          bullets={[
            'Complex data migrations',
            'Slow access times',
            'Missing integrations to new technology',
          ]}
        />
      </Flag>

      <TitleStripWithContent title={<>How much is this already costing you?</>}>
        <div className={styles.grid}>
          <Result
            number="89%"
            label={
              <>
                of <Highlight style="bad">customer loss</Highlight>
              </>
            }
          >
            <strong>Harris</strong> found 86% of consumers stop
            interacting&#8203;/&#8203;buying from businesses if they have a bad
            experience.
          </Result>
          <Result
            number="86%"
            label={
              <>
                of buyers <Highlight style="warning">pay more</Highlight>
              </>
            }
          >
            According to <strong>Gartner</strong> 89 percent of companies plan
            to compete primarily on the basis of CX this year.
          </Result>
          <Result
            number="25%"
            label={
              <>
                <Highlight style="good">in profitability</Highlight>
              </>
            }
          >
            <strong>Oracle</strong> reported that multichannel integration has
            the ability to increase profitability by 25 percent.
          </Result>
        </div>
      </TitleStripWithContent>

      <div style={{ margin: '20vh 0 15vh' }}>
        <InterstitialTitle style="two">
          Here's how an Headless&nbsp;CMS can&nbsp;help&nbsp;your company
        </InterstitialTitle>
      </div>

      <Flag
        style="good"
        title={
          <>
            Manage all your content{' '}
            <FlagHighlight>in&nbsp;one&nbsp;place</FlagHighlight>
          </>
        }
        image={Ill4}
      >
        <p>
          Headless CMS means keep everyone on the same page, storing everything
          in a single centralized hub, making an edit and publish it instantly,
          everywhere.
        </p>
        <Bullets
          style="good"
          icon={SuccessIcon}
          bullets={[
            'Access every bit of copy, anytime',
            'Your content becomes future-proof',
            'Deliver real omnichannel experiences',
          ]}
        />
      </Flag>

      <Flag
        style="good"
        title={
          <>
            From idea to market <FlagHighlight>in&nbsp;hours</FlagHighlight>, not months
          </>
        }
        image={Ill5}
      >
        <p>
          Test and iterate painlessly, no matter what’s the digital product
          you’re working on, without reaching out to your IT for complex
          migrations.
        </p>
        <Bullets
          style="good"
          icon={SuccessIcon}
          bullets={[
            'Flexible content model',
            'Fast iterations, instant prototyping',
            'Repeatable architecture for all your projects',
          ]}
        />
      </Flag>

      <Flag
        style="good"
        title={
          <>
            A <FlagHighlight>global delivery network</FlagHighlight> at your disposal
          </>
        }
        image={Ill6}
      >
        <p>
          With a network that spans 200 cities in more than 90 countries, you
          can be sure your content is always accessible, performant, secure, and
          close to every customer.
        </p>
        <Bullets
          style="good"
          icon={SuccessIcon}
          bullets={[
            'Reduced architectural complexities',
            'Scalability is built-in',
            'Integrations ready with any digital product',
          ]}
        />
      </Flag>

      <Numbers title="Why you should use DatoCMS">
        <NumbersBlock
          title="-79%"
          logo={Linkedin}
        >
          In operational costs
        </NumbersBlock>
        <NumbersBlock 
          title="30.000"
          logo={Nike}
        >
          Monthly orders
        </NumbersBlock>
        <NumbersBlock
          title="10x"
          logo={Arduino}
        >
          Faster loading times
        </NumbersBlock>
      </Numbers>

      <PersonasPicker />

      <UseCases />
    </Layout>
  );
}

export default withDato(Homepage);
