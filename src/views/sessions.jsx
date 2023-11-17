import DB from '../data/data1.json';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import ArrLeft from '../assets/icons/arr-left.svg';
import Arrow from '../assets/icons/arrow.svg';
import ArrRight from '../assets/icons/arr-right.svg';
import Filter from '../assets/icons/filter.svg';
import Sort from '../assets/icons/sort.svg';
import { Search } from '../cmps/search';

export function Sessions() {

    const [data, setData] = useState({ ...DB })
    const [searchTerm, setSearchTerm] = useState('')
    const [currPage, setCurrPage] = useState(1)
    const [sortBy, setSortBy] = useState('')
    const itemsPerPage = 13
    // console.log(data)

    function getStatus(status) {
        if (status === 'planned') return 'Запланировано'
        if (status === 'completed') return 'Завершено'
        if (status === 'examination') return 'Идет'
        if (status === 'canceled') return 'Отменено'
    }


    function setDataTime(start, end) {
        const startDate = new Date(start)
        const endDate = new Date(end)

        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        };

        const formattedStartDate = startDate.toLocaleString('ru-RU', options)
        const formattedEndDate = endDate.toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit' })
        const result = `${formattedStartDate}-${formattedEndDate}`

        return result
    }

    function onSetPage(n) {
        let page = currPage + n
        console.log(page)
        if (page < 1) setCurrPage(1)
        else if (page > data.sessions.length / itemsPerPage) setCurrPage(Math.round(data.sessions.length / itemsPerPage))
        else setCurrPage(page)
    }

    function onSorting(param) {
        let sortedData = data
        if (param === 'time') {

            sortedData.sessions.sort((a, b) => {
                const nameA = a.start.toUpperCase();
                const nameB = b.start.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            })
            setSortBy('time')
            setData(sortedData)

        }

        if (param === 'status') {

            sortedData.sessions.sort((a, b) => {
                const nameA = a.status.name.toUpperCase();
                const nameB = b.status.name.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            })
            setSortBy('status')
            setData(sortedData)

        }

        if (param === 'module') {
            sortedData.sessions.sort((a, b) => {
                const nameA = a.module.toUpperCase();
                const nameB = b.module.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            })
            setSortBy('module')
            setData(sortedData)

        }

        if (param === 'type') {

            sortedData.sessions.sort((a, b) => {
                const nameA = a.type.name.toUpperCase();
                const nameB = b.type.name.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            })
            setSortBy('type')
            setData(sortedData)

        }

        if (param === 'rooms') {
           
                sortedData.sessions.sort((a, b) => {
                    const nameA = a.rooms[0].name.toUpperCase();
                    const nameB = b.rooms[0].name.toUpperCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    return 0;
                })
                setSortBy('rooms')
                setData(sortedData)
            
        }

        if (param === 'groups') {
           
                sortedData.sessions.sort((a, b) => {
                    console.log(a)
                    console.log(b)
                    if (a.groups < 1) return 1
                    if (b.groups < 1) return -1
                    const nameA = a.groups[0].name.toUpperCase();
                    const nameB = b.groups[0].name.toUpperCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    return 0;
                })
                setSortBy('groups')
                setData(sortedData)
            
        }

    }




    return (
        <div className="sessions">
            <div className="header">
                <span className="title">Учебные сессии</span>
                <div className="session-nav">
                    <Search setSearchTerm={setSearchTerm} setCurrPage={setCurrPage} />
                    <ReactSVG className='search-btn' src={Filter} />
                    <ReactSVG className='search-btn' src={Sort} />
                    <button className='create-btn'>Создать</button>
                </div>
            </div>
            <div className="session-container">
                <div className="table-container">
                    <table>
                        <tbody>

                            <tr className='head'>
                                <th onClick={() => onSorting('time')}><span className='sorting'>Дата и время {sortBy === 'time' ? <ReactSVG src={Arrow} /> : ''}</span></th>
                                <th onClick={() => onSorting('status')}><span className='sorting'>Статус {sortBy === 'status' ? <ReactSVG src={Arrow} /> : ''}</span></th>
                                <th onClick={() => onSorting('module')}><span className='sorting'>Название учебного модуля {sortBy === 'module' ? <ReactSVG src={Arrow} /> : ''}</span></th>
                                <th onClick={() => onSorting('type')}><span className='sorting'>Тип сессии {sortBy === 'type' ? <ReactSVG src={Arrow} /> : ''}</span></th>
                                <th onClick={() => onSorting('rooms')}><span className='sorting'>Комната {sortBy === 'rooms' ? <ReactSVG src={Arrow} /> : ''}</span></th>
                                <th onClick={() => onSorting('groups')}><span className='sorting'>Группа {sortBy === 'groups' ? <ReactSVG src={Arrow} /> : ''}</span></th>
                            </tr>
                            {data.sessions
                                .filter((session) => session.module.toLowerCase().includes(searchTerm.toLowerCase()))
                                .slice((currPage - 1) * itemsPerPage, ((currPage - 1) * itemsPerPage) + itemsPerPage)
                                .map((session) => (
                                    <tr>
                                        <td>{setDataTime(session.start, session.end)}</td>

                                        <td><span className={`status ${getStatus(session.status.name)}`}>{getStatus(session.status.name)}</span></td>
                                        <td>{session.module}</td>
                                        <td>{session.type.name}</td>
                                        <td>{session.rooms.map(room => (
                                            <span>
                                                {room.name} {room.name.length > 1 ? ',' : ''}
                                            </span>
                                        ))}</td>
                                        <td>{session.groups.length ? session.groups[0].name : ''}</td>
                                    </tr>

                                ))}
                        </tbody>
                    </table>
                </div>
                {/* <div className="table-footer"> */}
                <div className="pagintation">
                    <ReactSVG src={ArrLeft} className="pageBtn" onClick={() => onSetPage(-1)} />
                    <span>{currPage}</span>
                    <ReactSVG src={ArrRight} className="pageBtn" onClick={() => onSetPage(1)} />
                </div>
                {/* </div> */}
            </div>
        </div>
    )

}