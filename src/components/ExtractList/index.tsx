import React from 'react';
import { format, parseISO } from 'date-fns';

import Card from '../Card';
import * as Font from '../Fonts';
import ListItemAction from '../ListItemAction';
import Loading from '../Loading';

import { Transaction } from 'repository/Statement';
import Utils from 'utils/Utils';

import * as s from './styles';

type ExtractProps = {
  extracts: Transaction[];
  loading?: boolean;
};

const getTitleFormat = ({ valueTransaction, dateTime }: Transaction) => {
  const isDanger = parseInt(valueTransaction) < 0;
  const value = Utils.formatMoney(valueTransaction);
  const parsedDate = format(parseISO(dateTime), 'dd/MM/yyyy');

  return (
    <s.TitleWrapper>
      {isDanger ? (
        <s.TitleDangerValue>{value}</s.TitleDangerValue>
      ) : (
        <s.TitleValue>{value}</s.TitleValue>
      )}
      <s.TitleDate>{parsedDate}</s.TitleDate>
    </s.TitleWrapper>
  );
};

const ExtractList: React.FC<ExtractProps> = ({ extracts, loading }) => {
  return (
    <Card>
      <s.CardContent>
        <s.ContentWrapper>
          <Font.Description>Extratos</Font.Description>
          {loading ? (
            <Loading />
          ) : (
            extracts.map(extract => {
              const title = getTitleFormat(extract);
              let description = extract.typeOperation;
              if (extract.paymentCategory) {
                description += ` - ${extract.paymentCategory}`;
              }
              return (
                <ListItemAction
                  key={extract.id}
                  title={title}
                  description={description}
                />
              );
            })
          )}
        </s.ContentWrapper>
      </s.CardContent>
    </Card>
  );
};

export default ExtractList;
