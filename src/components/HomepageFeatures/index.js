import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// TODO replace images with something more... Atlas-y
const FeatureList = [
    {
        title: 'Work In Progress',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                This site is a work in progress! Especially as the game hasnt finished development, certain items may be
                wrong or not been updated
            </>
        ),
    },
    {
        title: 'Contributors Welcome',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Spot an error, or something missing that you know works? Drop a Pull Request, or open an issue with the
                information in!
            </>
        ),
    },
    {
        title: 'Need Help?',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Theres a large group of Atlas Server Admins available in the <a href={"https://discord.gg/CSZavry"}>Atlas
                Server Owner Support Discord</a>, join up for active help with various issues!
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
