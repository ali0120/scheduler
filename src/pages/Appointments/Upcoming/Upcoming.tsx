import React, { useRef } from 'react';
import { MRT_ColumnDef, MantineReactTable } from 'mantine-react-table';
import { useSetRecoilState } from 'recoil';
import { Loader } from '@mantine/core';
import { limitState } from '../../../states/limitSize';
import { useTableData } from '../../../hooks/useTableData';
import Form from '../../../components/upcomingForm/Form';

type Client = {
    id: number;
    name: string;
    email: string;
    body: string;
};

const columns: MRT_ColumnDef<any>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'name',
        header: 'First Name',
    },
    {
        accessorKey: 'email',
        header: 'Last Name',
    },
    {
        accessorKey: 'body',
        header: 'Body',
    }
];

type TableScrollAreaProps = {
    tableData: Client[];
};


const Upcoming: React.FC<TableScrollAreaProps> = () => {
    const setLimit = useSetRecoilState(limitState);
    const { tableData, isLoading, isError, isFetching } = useTableData();
    const tableContainerRef = useRef<any>(null);
    const fetchMoreOnBottomReached = () => {
        const containerElement = tableContainerRef.current;
        const { scrollHeight, scrollTop, clientHeight } = containerElement;
        if (scrollHeight - scrollTop - clientHeight < 1) {
            setLimit((prev) => prev + 25)
        }
    }

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <div>Error occurred while fetching data.</div>;
    }

    return (
        <>
            <Form />
            <div ref={tableContainerRef} style={{ height: '700px' }}>
                <MantineReactTable
                    enableSorting={false}
                    enableColumnActions={false}
                    enableFullScreenToggle={false}
                    enableDensityToggle={false}
                    enableHiding={false}
                    enableFilters={false}
                    enablePagination={false}
                    columns={columns}
                    data={tableData}
                    enableStickyHeader
                    mantineTableProps={{
                        style: { minWidth: '700px' },
                    }}
                    mantineTableContainerProps={{
                        ref: tableContainerRef,
                        sx: { maxHeight: '600px', background: "red" },
                        onScroll: fetchMoreOnBottomReached,
                    }}
                    mantineToolbarAlertBannerProps={
                        isError
                            ? {
                                color: 'red',
                                children: 'Error loading data',
                            }
                            : undefined
                    }
                    state={{
                        isLoading,
                        showAlertBanner: isError,
                        showProgressBars: isFetching,
                    }}
                />
            </div>
        </>

    );
};

export default Upcoming;