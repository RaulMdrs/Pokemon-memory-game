import React from 'react';
import styled from 'styled-components';
import colors from '../../colors';
import { BackButton } from '../../Components';

const LeaderboardPageContainer = styled.div`
    margin: 0px;
    padding: 20px;
    background-color: ${colors.backgroundModal};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
`;

const LeaderboardTitle = styled.h1`
    text-align: center;
`;

const LeaderboardTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const LeaderboardTableHeader = styled.th`
    background-color: ${colors.primary};
    color: #ffffff;
    padding: 10px;
    text-align: left;
`;

const LeaderboardTableRow = styled.tr`
    &:nth-child(even) {
        background-color: #5c079969;
    }
`;

const LeaderboardTableCell = styled.td`
    padding: 10px;
`;

const LeaderboardPage = ({ leaderboard }) => {
    const sortedLeaderboard = leaderboard.sort((a, b) => b.points - a.points);

    return (
        <LeaderboardPageContainer>
            <BackButton/>
            <LeaderboardTitle>Placar de Líderes</LeaderboardTitle>
            <LeaderboardTable>
                <thead>
                    <tr>
                        <LeaderboardTableHeader>Posição</LeaderboardTableHeader>
                        <LeaderboardTableHeader>Nome</LeaderboardTableHeader>
                        <LeaderboardTableHeader>Pontuação</LeaderboardTableHeader>
                    </tr>
                </thead>
                <tbody>
                    {sortedLeaderboard.map((player, index) => (
                        <LeaderboardTableRow key={player.id}>
                            <LeaderboardTableCell>{index + 1}</LeaderboardTableCell>
                            <LeaderboardTableCell>{player.name}</LeaderboardTableCell>
                            <LeaderboardTableCell>{player.points}</LeaderboardTableCell>
                        </LeaderboardTableRow>
                    ))}
                </tbody>
            </LeaderboardTable>
        </LeaderboardPageContainer>
    );
};

export default LeaderboardPage;
