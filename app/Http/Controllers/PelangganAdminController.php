<?php

namespace App\Http\Controllers;

use App\Models\Pelanggan;
use Illuminate\Http\Request;
use Inertia\Inertia;


class PelangganAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pelanggan = Pelanggan::all();
        return inertia::render('Admin/Pelanggan', [
            'pelanggan' => $pelanggan,
            'assetUrl' => asset(''),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $pelanggan = new Pelanggan();
        $pelanggan->id_pelanggan = $request->pelangganId;
        $pelanggan->nama_pelanggan = $request->namaPelanggan;
        $pelanggan->alamat = $request->alamat;
        $pelanggan->nomor_telepon = $request->nomorTelepon;
        $pelanggan->save();
        return redirect()->back()->with('message', 'Berhasil Di Masukan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Pelanggan $pelanggan)
    {
        $pelanggan = Pelanggan::all();
        return inertia::render('Admin/Pelanggan', [
            'pelanggan' => $pelanggan,
            'assetUrl' => asset(''),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(produk $produk)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, produk $produk)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(produk $produk)
    {
        //
    }
}
