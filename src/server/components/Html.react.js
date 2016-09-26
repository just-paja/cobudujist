import React, { PropTypes } from 'react';

const { bool, object, shape, string } = PropTypes;

const Html = ({
  appCssFilename,
  bodyHtml,
  isProduction,
  helmet,
}) => {
  // Only for production. For dev, it's handled by webpack with livereload.
  const linkStyles = isProduction &&
    <link href={`/build/${appCssFilename}`} rel="stylesheet" />;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width" name="viewport" />
        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {helmet.script.toComponent()}
        {linkStyles}
        <link rel="manifest" href="manifest.json" />
        <link rel="stylesheet" href="/static/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/static/bootswatch/bootstrap.min.css" />
      </head>
      {/* eslint-disable react/no-danger */}
      <body dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      {/* eslint-enable react/no-danger */}
    </html>
  );
};

Html.propTypes = {
  appCssFilename: string.isRequired,
  bodyHtml: string.isRequired,
  helmet: shape({
    base: object,
    meta: object,
    link: object,
    script: object,
    title: object,
  }).isRequired,
  isProduction: bool.isRequired,
};

export default Html;
