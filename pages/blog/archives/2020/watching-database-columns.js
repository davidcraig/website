import React from 'react'
import CodeBlock from '../../../../Components/Theme/CodeBlock'
import BlogArticle from '../../../../Components/BlogArticle'

const createTableSql = () => {
  const SQL = [
    'CREATE TABLE \`database\`.\`change_audit\` (',
    '    \`id\` INT NOT NULL AUTO_INCREMENT,',
    '    \`table\` VARCHAR(45) NOT NULL,',
    '    \`column\` VARCHAR(45) NOT NULL,',
    '    \`old\` VARCHAR(45) NULL,',
    '    \`new\` VARCHAR(45) NULL,',
    '    \`time\` DATETIME NULL DEFAULT NOW(),',
    '    PRIMARY KEY (\`id\`)',
    ');'
  ]

  return <CodeBlock type='sql' code={SQL} />
}

const createTriggerSql = () => {
  const SQL = [
  'DELIMITER $$',
  'USE \`database\`$$',
  'CREATE TRIGGER \`table_AFTER_UPDATE_column\` AFTER UPDATE ON \`table\` FOR EACH ROW',
  'BEGIN',
  '    INSERT INTO \`change_audit\` (\`table\`, \`column\`, \`old\`, \`new\`, \`time\`) VALUES (',
  '        \'table_name\',',
  '        \'column_name\',',
  '        OLD.column_name,',
  '        NEW.column_name,',
  '        NOW()',
  '    );',
  'END$$',
  'DELIMITER ;'
  ]

  return <CodeBlock type='sql' code={SQL} />
}

function WatchingDatabaseColumns() {
  const title = 'Watching a database column for changes (Trigger)'
  const date = '31 Jan 2020'
  const tableSql = createTableSql()
  const triggerSql = createTriggerSql()

  return (
    <BlogArticle
      title={title}
      date={date}
      datetime='2020-01-31'
    >
      <p>In order to determine what changes occur in a database for a particular column, it can be useful to set up a watcher.</p>
      <p>To do this we first need to create an audit table (name can be anything).</p>
      {tableSql}
      <p>Once we have our audit table we can create our trigger</p>
      {triggerSql}
    </BlogArticle>
  )
}

export default WatchingDatabaseColumns
